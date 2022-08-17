import React from 'react';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import UsersPage from "./components/UsersPage/UsersPage";
import AuthPage from "./components/AuthPage/AuthPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {useAppSelector} from "./redux/store";
import {isAuthSelector} from "./redux/auth/authSelectors";

const App = () => {
    const isAuth= useAppSelector(isAuthSelector)
   console.log(isAuth);

    return (
        <BrowserRouter>
        <div>
            <Routes>
            {isAuth ?
                ( <Route path='/' element={<UsersPage/>}/>):
                ( <Route path='/' element={<AuthPage/>}/>)
            }
                {isAuth ?
                    ( <Route element={<UsersPage/>} path='*' />):
                    ( <Route element={<AuthPage/>} path='*' />)
                }

            </Routes>

        </div>
        </BrowserRouter>

    );
};

export default App;