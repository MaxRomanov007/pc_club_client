import {useState} from "react";
import AxiosStatic from "axios";
import {useNotification} from "@/hooks/useNotification.ts";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type anyFunction = (...args : any[]) => any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type fetchingFunction = (...args : any[]) => Promise<number>;
type useFetchingResult = [fetchingFunction, boolean, number];
type useFetchingFunc = (callback: anyFunction) => useFetchingResult;

export const useFetching: useFetchingFunc = (callback) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [status, setStatus] = useState<number>(200)
    const showNotification = useNotification()
    const navigate = useNavigate()

    const fetching: fetchingFunction = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e: any) {
            if (e.isAuthError) {
                showNotification("Необходимо авторизоваться")
                navigate('/login')
                return 0
            }
            if (!AxiosStatic.isAxiosError(e) || !e.response) {
                setStatus(0)
                return 0
            }

            setStatus(e.response.status)
            return e.response.status
        } finally {
            setIsLoading(false)
        }
        return 200
    }

    return [fetching, isLoading, status];
}