
import { Person } from "@/interfaces/Person";
import $api from "@/utils/http";
import { AxiosResponse } from "axios";

export default class PersonService {

    static async getPersons(): Promise<AxiosResponse<Array<Person>>> {
        return $api.get("/persons", {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        })
    }

    static async getPersonById(id: number): Promise<AxiosResponse<Person>> {
        return $api.get(`/person/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        })
    }

}