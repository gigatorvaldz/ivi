import { Film } from "@/interfaces/Film";
import $api from "@/utils/http";
import { AxiosResponse } from "axios";

export default class FilmsService {

    static async films(): Promise<AxiosResponse<Array<Film>>> {
        return $api.get("/films", {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        })
    }

    
    static async parseFilm(id: number): Promise<AxiosResponse<Array<Film>>> {
        return $api.get(`/parse/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
        })
    }

}