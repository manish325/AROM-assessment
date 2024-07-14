import { FC } from "react";
import "./authentication.scss";
import { AuthLayout } from "./layouts/Auth";
import { AuthProvider } from "./contexts";

export const AuthenticationFeature : FC = () => {
    return (
    <AuthProvider>
       <AuthLayout/>
    </AuthProvider>
    )
}