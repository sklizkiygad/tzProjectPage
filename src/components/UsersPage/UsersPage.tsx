import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {IUser} from "../../types/types";
import UserItem from "../UserItem/UserItem";
import List from "../List/List";
import './UsersPage.css';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {logout} from "../../redux/auth/authActions";
import {getUsersContacts, searchContact} from '../../redux/contactUser/contactActions';
import {filteredYserContactsSelector, userContactsSelector} from '../../redux/contactUser/contactSelectors';
import {loginUserSelector} from "../../redux/auth/authSelectors";
import {AddContactButton} from "../AddContactButton/AddContactButton";


const UsersPage:FC = () => {

    const [searchQuery,setSearchQuery]=useState('');
    const dispatch = useAppDispatch();
    const users = useAppSelector(filteredYserContactsSelector)

   const handleSearchQuery=(e: ChangeEvent<HTMLInputElement>)=> setSearchQuery(e.target.value);

    useEffect(()=>{
        dispatch(searchContact(searchQuery))
    },[searchQuery])

    useEffect(()=>{
        dispatch(getUsersContacts())
    },[])

    
    const out = () => dispatch(logout())
    const login= useAppSelector(loginUserSelector);
    return (
        <div>

            <div className="nav">
                <h1>Добро пожаловать, {login}</h1>
                <AddContactButton/>
                <input type="text" placeholder="Поиск" value={searchQuery} onChange={handleSearchQuery}/>
                <button onClick={out}>Выйти</button>
            </div>

            <List items={users} renderItem={(user:IUser)=><UserItem numb={0} user={user} key={user.id}/> }/>
        </div>
    );
};

export default UsersPage;