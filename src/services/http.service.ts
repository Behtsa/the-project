import axios, { Method, AxiosRequestConfig, AxiosResponse} from 'axios';
import { IHttpResponse } from '../interfaces/services/IHttpResponse';

export class HttpService {

    /**
     * Make http get request
     * @param {string} path 
     * @returns IHttpResponse
     */
    public get(path: string): Promise<IHttpResponse> {
        return this.request('get', path);
    }

    /**
     * Fn that makes axios request based on passed parameters
     * @param {string} httpMethod 
     * @param {string} path 
     * @param {string} bodyRequest 
     * @param {string} headers 
     * @returns IHttpResponse
     */
    private request(httpMethod: Method, path: string, bodyRequest?: any, headers?: any): Promise<IHttpResponse> {
        const requestConfig: AxiosRequestConfig = {
            method: httpMethod,
            url: path,
            data: bodyRequest,
            headers: headers,
        };
        return axios.request(requestConfig)
        .then(this.customSuccess)
        .catch(this.customError);
    }

    /**
     * Fn that returns a custom successful response
     * @param response 
     * @returns 
     */
    private customSuccess(response: AxiosResponse): Promise<IHttpResponse> {
        const resultResponse: IHttpResponse = {
            success: true,
            status: response.status,
            headers: response.headers,
            data: response.data,
            message: 'ok'
        };
        return Promise.resolve(resultResponse);
    }

    /**
     * Fn that returns a custom error response
     * @param response 
     * @returns 
     */
    private customError(response: AxiosResponse): Promise<IHttpResponse> {
        const resultResponse: IHttpResponse = {
            success: false,
            status: 500,
            headers: {},
            data: {},
            message: 'Internal server error'
        };
        return Promise.reject(resultResponse);
    }
}