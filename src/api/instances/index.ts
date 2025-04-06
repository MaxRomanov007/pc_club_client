import axios from "axios";
import {LoadWithAuthInterceptor} from "@/api/interceptors/withAuth.ts";

const address = import.meta.env.VITE_API_ADDRESS;

export const api = axios.create({
    baseURL: address,
    withCredentials: true,
})

LoadWithAuthInterceptor();