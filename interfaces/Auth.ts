export interface AuthResponse {
    accessToken: string,
    refreshToken: string
}

export interface RegistrationRequest {
    email: string,
    password: string,
    first_name: string,
    second_name: string,
    phone: number,
    age: number,
    country: string,
    role: string
}

export interface AuthRequest {
    email: string,
    password: string
}