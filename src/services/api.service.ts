import { API_ENDPOINTS } from "../constants/api-endpoints";
import { IHttpResponse } from "../interfaces/services/IHttpResponse";
import { HttpService } from "./http.service";

export class ApiService {
    private httpService: HttpService;

    constructor() {
        this.httpService = new HttpService();
    }

    public getAllCharacters(): Promise<IHttpResponse> {
        const path = API_ENDPOINTS.CHARACTER;
        return this.httpService.get(path);
    }
}