import {api} from "@/api/instances";
import {accessTokenKey} from "@/constants";
import {IUser} from "types/pc/user.ts";
import {IDishOrder, IPcOrder} from "types/pc/order.ts";

type LoginResponse = {
    access_token: string
}
type RegisterResponse = {
    access_token: string
}
type UserOrdersResponse = {
    pc_orders: IPcOrder[]
    dish_orders: IDishOrder[]
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

    static async getUserOrders(): Promise<[IPcOrder[], IDishOrder[]]> {
        const response = await api.get<UserOrdersResponse>('user-with-orders')
        console.log(response)
        return [response.data.pc_orders, response.data.dish_orders]
    }
}