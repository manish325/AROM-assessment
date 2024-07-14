export interface IAuthenticationProps {
    
}

export interface ILoginForm {
    username : string,
    password : string
}

export interface IRegisterForm {
    username : string,
    email : string,
    firstName : string,
    lastName : string,
    password : string,
    confirmPassword : string,
    mobile : string
}

export interface IAuthState {
    loading : boolean,
    snackbarMessage : string
}

export interface IAuthContext {
    state : IAuthState | undefined,
    login : (loginData : ILoginForm) => void,
    register : (registerData : IRegisterForm) => void,
    authDispatch : (action : AuthAction) => void
}

export interface AuthAction {
    type : string,
    payload : any
};