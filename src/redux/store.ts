import { applyMiddleware, combineReducers, compose } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from "./auth/authReduser";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



import {contactReducer} from "./contactUser/contactReduser";




declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


let reducers = combineReducers({
    auth: authReducer,
    contact:contactReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers,

    compose(
        applyMiddleware(
            thunk
        ),
        composeEnhancers()
    ));

export default store


export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector