import {RootState} from "../store";

export const isAuthSelector = (state:RootState) => {
    return state.auth.isAuth;
}

export const loginUserSelector = (state:RootState) => {
    return state.auth.login;
}
