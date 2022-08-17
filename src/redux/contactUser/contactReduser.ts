import {IUser} from "../../types/types";
import {ADD_USER_CONTACT, DELETE_USER_CONTACT, SEARCH_CONTACT_USER, SET_USERS_CONTACTS} from "./contactConstants";

export interface ContactState {
    userContacts: IUser[];
    filteredContact:IUser[]
}

let initialState:ContactState = {
    userContacts: [],
    filteredContact:[]

};

export const contactReducer = (state = initialState, action:any) => {
    console.log(action);
    switch (action.type) {
        case SET_USERS_CONTACTS:
            return {
                ...state,
                userContacts:action.payload,
                filteredContact:action.payload
            }
            case DELETE_USER_CONTACT:                
                return {
                    ...state,
                    userContacts: [...state.userContacts.filter(user=>{
                        console.log('dsfsdfsdfsd', user.id, action);
                        return user.id !== action.id
                    })],
                }

        case ADD_USER_CONTACT:
            return {
                ...state,
                userContacts: [...state.userContacts, action.payload],
                filteredContact: [...state.userContacts, action.payload]
            }

        case SEARCH_CONTACT_USER:
            return {
                ...state,
                filteredContact: [...state.userContacts.filter(user=>{
                    return user.name.toLowerCase().includes(action.query.toLowerCase()) || user.phone.toLowerCase().includes(action.query.toLowerCase())
                })]
            }

        default:
            return state;
    }
}