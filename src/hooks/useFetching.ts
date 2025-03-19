import {useState} from "react";
import AxiosStatic from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type anyFunction = (...args : any[]) => any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type fetchingFunction = (...args : any[]) => Promise<void>;
type useFetchingResult = [fetchingFunction, boolean, number];
type useFetchingFunc = (callback: anyFunction) => useFetchingResult;

export const useFetching: useFetchingFunc = (callback) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [status, setStatus] = useState<number>(200)

    const fetching: anyFunction = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e: unknown) {
            if (!AxiosStatic.isAxiosError(e)) {
                setStatus(0)
                return
            }
            if (!e.response) {
                setStatus(0)
                return
            }

            setStatus(e.response.status)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, status];
}