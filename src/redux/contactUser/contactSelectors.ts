import {RootState} from "../store";

export const userContactsSelector = (state:RootState) => {
    return state.contact.userContacts;
}

export const filteredYserContactsSelector=(state:RootState)=>{
    return state.contact.filteredContact;
}