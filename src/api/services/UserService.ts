import {api} from "@/api/instances";
import {accessTokenKey} from "@/constants";

type LoginResponse = {
    access_token: string
}

export default class UserService {
    static async login(email: string, password: string): Promise<void> {
        const response = await api.post<LoginResponse>('login', {
            email, password
        })
        localStorage.setItem(accessTokenKey, response.data.access_token)
    }
}