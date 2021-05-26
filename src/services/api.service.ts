import { API_ENDPOINTS } from "../constants/api-endpoints";
import { IHttpResponse } from "../interfaces/services/IHttpResponse";
import { HttpService } from "./http.service";

export default class ApiService {
    private httpService: HttpService;

    constructor() {
        this.httpService = new HttpService();
    }

    public getCharacters(selectedPage?: string): Promise<IHttpResponse> {
        const path = selectedPage ? API_ENDPOINTS.CHARACTER + '/?page=' + selectedPage
            : API_ENDPOINTS.CHARACTER;
        return this.httpService.get(path);
    }
}