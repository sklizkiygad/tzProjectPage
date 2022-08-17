import React,{FC} from 'react';
import {IUser} from "../../types/types";
import './UserList.css';
import UserItem from "../UserItem/UserItem";

interface UserListProps {
    users:IUser[];

}



const UserList: FC<UserListProps> = ({users}) => {
    console.log(users);
    return (
        <div>

            {users.map((user,index:number)=>
                <UserItem numb={index} user={user}/>
            )}

        </div>
    );
};

export default UserList;