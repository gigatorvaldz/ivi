import { AuthRequest, AuthResponse } from "@/interfaces/Auth";
import { User } from "@/interfaces/User";
import $api from "@/utils/http";
import { AxiosResponse } from "axios";
import { RegistrationRequest } from '../interfaces/Auth';

export default class AuthService {

    static async login(authData: AuthRequest): Promise<AxiosResponse<AuthResponse>> {
        return $api.post("auth/login", authData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        })
    }

    static async logout(): Promise<AxiosResponse<void>> {
        return $api.get("auth/logout", {
            withCredentials: false,
        })
    }

    static async registration(registrationData: RegistrationRequest): Promise<AxiosResponse<User>> {     
        return $api.post("/users", {...registrationData, role: "USER"}, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        })
    }

}