import {ADD_USER_CONTACT, DELETE_USER_CONTACT, SEARCH_CONTACT_USER, SET_USERS_CONTACTS} from "./contactConstants";
import {IUser} from "../../types/types";
import axios from "axios";
import {AnyAction} from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";




interface IUsersContactsActions {
    type: typeof SET_USERS_CONTACTS,
    payload: IUser[]
}

interface IDeleteUserContactActions {
    type: typeof DELETE_USER_CONTACT,
    id: number
}

interface IAddUserContactActions {
    type: typeof ADD_USER_CONTACT,
    payload: IUser
}

interface ISearchContactActions {
    type: typeof SEARCH_CONTACT_USER,
    query: string
}

export const setUsersContacts = (payload:IUser[]):IUsersContactsActions => ({
    type: SET_USERS_CONTACTS, payload
});

export const getUsersContacts = ():ThunkAction<Promise<void>, RootState, unknown,AnyAction> => async (dispatch) => {

    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    try{
        console.log(response.data);
        
        dispatch(setUsersContacts(response.data))
    }catch{
        console.log('Error');

    }
}

export const deleteUserContactById = (id:number):IDeleteUserContactActions => ({type: DELETE_USER_CONTACT, id})

export const addUserContactById = (payload:IUser):IAddUserContactActions => ({type: ADD_USER_CONTACT, payload})

export const searchContact = (query:string):ISearchContactActions => ({ type: SEARCH_CONTACT_USER,query});