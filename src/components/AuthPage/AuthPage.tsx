import React, {ChangeEvent, useRef, useState} from 'react';
import './AuthPage.css';
import {authLogin} from "../../redux/auth/authActions";
import {useAppDispatch} from "../../redux/store";
import {useDispatch} from "react-redux";


const AuthPage = () => {

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();

    const handleLogin = (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)


    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

    const fetchAuth = (e:React.MouseEvent) => {
       e.preventDefault();
       //dispatch(authLogin(login, password))
       dispatch(authLogin(login, password))
    }


    return (
        <div>
            <h1>Пожалуйста авторизируйтесь</h1>
            <form >

                <input onChange={handleLogin} placeholder="Логин" type="text" value={login}/>
                <input onChange={handlePassword} placeholder="Пароль" type="password" value={password}/>
                <button onClick={fetchAuth} type="submit">Войти</button>
            </form>

        </div>
    );
};

export default AuthPage;