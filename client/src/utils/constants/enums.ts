export enum ROUTES {
    AUTH = 'auth/*',
    LOGIN = `login`,
    REGISTER = `register`,
    DASHBOARD = '/dashboard/',
    TASK = 'task/:taskId/'
}

export enum ERROR_MESSAGES {
    INCORRECT_EMAIL = "This is not an Email",
    REQUIRED = "This field is required!",
    SOMETHING_WENT_WRONG = "Something went wrong!",
    TRY_AGAIN = "Please try again!",
    LENGTH = "Length should be 10 digits!"
}

export enum API_ENDPOINTS {
    REGISTER = "/auth/register",
    LOGIN = "/auth/login",
    USER_DETAILS = "/user/getUserDetails"
}