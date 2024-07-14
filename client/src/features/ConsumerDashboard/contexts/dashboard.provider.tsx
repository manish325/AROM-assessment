import { FC } from "react";
import { useUserData } from "../hooks/useUserData";

const DashboardContextProvider : FC = () => {
    const {userData, loading : loadingUserData, } = useUserData();
    return (
        
    )
}