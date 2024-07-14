import { axiosService } from "./axios";

class AppService {

    async getHello() {
        try {
            const response = await axiosService.getAxiosInstance()?.get('http://localhost:3000/');
            console.log(response); // Log the response for debugging
            return response;
        } catch (error) {
            console.error('Error making GET request:', error);
            throw error; // Rethrow the error to propagate it further if needed
        }
    }
}

export const appService = new AppService();