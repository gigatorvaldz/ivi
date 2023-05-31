import { Review } from "./Review";

export interface User {
    id: number,
    email: string,
    password: string,
    first_name: string,
    second_name: string,
    phone: number,
    age: number,
    country: string,
    roles: Array<string>,
    reviews: Array<Review>,
    refreshToken: string
}