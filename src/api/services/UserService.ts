import {api} from "@/api/instances";
import {accessTokenKey} from "@/constants";
import {IUser} from "types/pc/user.ts";

type LoginResponse = {
    access_token: string
}
type RegisterResponse = {
    access_token: string
}

export default class UserService {
    static async login(email: string, password: string): Promise<void> {
        const response = await api.post<LoginResponse>('login', {
            email, password
        })
        localStorage.setItem(accessTokenKey, response.data.access_token)
    }

    static async register(email: string, password: string): Promise<void> {
        const response = await api.post<RegisterResponse>('register', {
            email, password
        })
        localStorage.setItem(accessTokenKey, response.data.access_token)
    }

    static async getUser(): Promise<IUser> {
        const response = await api.get<IUser>('user')
        return response.data
    }
}