import { useCallback, useContext, useEffect, useState } from "react"
import { IUserData } from "../types"
import { useLocalState } from "../../../hooks/localstorage";
import { useNavigate } from "react-router-dom";
import { ERROR_MESSAGES, ROUTES } from "../../../utils/constants/enums";
import { axiosService } from "../../../services/axios";
import { GlobalContext } from "../../../providers/contexts/Global";
import { dispatchSnackbar } from "../../../providers/store/dispatchers";
import { AxiosError } from "axios";

export const useUserData = ()=> {
    const [userData, setUserData] = useState<IUserData | undefined>(undefined);
    const [authToken] = useLocalState('auth-token');
    const [loading, setLoading] = useState(false);
    const {dispatchState} = useContext(GlobalContext);
    const navigate = useNavigate();


    useEffect(()=> {
        if(!authToken) {
            navigate(ROUTES.AUTH);
        }
    }, []);

    const getUserData = useCallback(async ()=> {
        try {
            setLoading(true);
            const response = await axiosService.getUserDetails(authToken as string);
            const userData = response.data.data as IUserData;
            setUserData(userData);
        } catch(e){
            if(e instanceof AxiosError) {
                dispatchState(dispatchSnackbar(e.response?.data.message))
            } else {
                dispatchState(dispatchSnackbar(ERROR_MESSAGES.SOMETHING_WENT_WRONG));
            }
        } finally {
            setLoading(false);
        }
    }, [authToken]);

    return {
        userData,
        getUserData,
        loading
    }
}