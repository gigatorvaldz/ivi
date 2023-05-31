import $api from '@/utils/http';
export default class UserService {
    static async getUsers(){
        return $api.get("/users")
    }
}