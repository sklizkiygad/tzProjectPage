import {LOGOUT, SET_USER_DATA} from "./authConstants";
import axios from "axios";
import {IAuth} from "../../types/types";
import { Dispatch} from 'redux'
import {LogoutAction, SetUserDataAction} from "./authReduser";

export const setAuthUserData = (login:string, isAuth:boolean):SetUserDataAction => ({
    type : SET_USER_DATA, payload:{login, isAuth}
});



export const authLogin = (login:string, password:string) => async (dispatch:Dispatch<any>) => {



    const response = await axios.get<IAuth>('http://localhost:3000/profile');
    try{
        if(response.data.login===login && response.data.password===password){
            dispatch(setAuthUserData(login, true))
        }else{
            alert('Неверный логин или пароль');
            console.log('error');

        }
    }catch{
        alert('Проблемы с сервером');
        console.log('Error');

    }
}

export const logout= ():LogoutAction => ({ type: LOGOUT});