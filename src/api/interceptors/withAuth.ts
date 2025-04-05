import {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {api, apiWithAuth} from "@/api/instances";
import {accessTokenKey} from "@/constants";

const REFRESH_TOKEN_ENDPOINT = '/refresh';

type FailedRequest = {
    resolve: (token: string) => void;
    reject: (error: AxiosError) => void;
};

type ExtendedAxiosRequestConfig = InternalAxiosRequestConfig & {
    _retry?: boolean;
};

type RefreshTokenResponse = {
    access_token: string;
};

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null): void => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token!);
        }
    });
    failedQueue = [];
};

export const LoadWithAuthInterceptor = () => {
    apiWithAuth.interceptors.request.use((config: ExtendedAxiosRequestConfig) => {
        const accessToken = localStorage.getItem(accessTokenKey);
        if (accessToken) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    });

    apiWithAuth.interceptors.response.use(
        (response: AxiosResponse) => response,
        async (error: AxiosError) => {
            const originalRequest = error.config as ExtendedAxiosRequestConfig;

            if (!localStorage.getItem(accessTokenKey)) {
                return Promise.reject({
                    ...error,
                    isAuthError: true
                });
            }

            if (error.response?.status === 401 && !originalRequest._retry) {

                if (isRefreshing) {
                    return new Promise<string>((resolve, reject) => {
                        failedQueue.push({ resolve, reject });
                    })
                        .then(token => {
                            originalRequest.headers = originalRequest.headers || {};
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                            return apiWithAuth(originalRequest);
                        })
                        .catch(err => {
                            return Promise.reject(err);
                        });
                }

                originalRequest._retry = true;
                isRefreshing = true;

                try {
                    const { data } = await api.post<RefreshTokenResponse>(REFRESH_TOKEN_ENDPOINT);

                    const newAccessToken = data.access_token;
                    if (newAccessToken) {
                        localStorage.setItem(accessTokenKey, newAccessToken);
                    }

                    originalRequest.headers = originalRequest.headers || {};
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                    processQueue(null, newAccessToken);

                    return api(originalRequest);
                } catch (refreshError) {
                    localStorage.removeItem(accessTokenKey);
                    processQueue(refreshError as AxiosError);
                    return Promise.reject({
                        ...refreshError as AxiosError,
                        isAuthError: true
                    });
                } finally {
                    isRefreshing = false;
                }
            }

            return Promise.reject(error);
        }
    );
}