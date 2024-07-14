import axios, {AxiosInstance} from 'axios'
import { ILoginForm, IRegisterForm } from '../features/Authentication/types';
import { API_ENDPOINTS } from '../utils/constants/enums';

class Axios {
    private axiosInstance : AxiosInstance | null = null;
    constructor() {
        this.axiosInstance = axios.create({
            baseURL : import.meta.env.VITE_BE_URL
        });
        console.log('Logging the base url : ', import.meta.env.VITE_BE_URL)
    }

    getAxiosInstance() : AxiosInstance | null {
        console.log(this.axiosInstance?.getUri());
        return this.axiosInstance;
    }

    async registerUser(userData : IRegisterForm) {
        return await (this.axiosInstance as AxiosInstance).post(API_ENDPOINTS.REGISTER, userData);
    }

    async loginUser (userData : ILoginForm) {
        return await (this.axiosInstance as AxiosInstance).post(API_ENDPOINTS.LOGIN, userData);
    }

    async getUserDetails(token : string) {
        return await (this.axiosInstance as AxiosInstance).post(API_ENDPOINTS.USER_DETAILS, {token});
    }
}

export const axiosService = new Axios();