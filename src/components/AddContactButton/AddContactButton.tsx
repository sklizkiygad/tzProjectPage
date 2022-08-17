import {ChangeEvent, FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {addUserContactById} from "../../redux/contactUser/contactActions";
import {userContactsSelector} from "../../redux/contactUser/contactSelectors";

export const  AddContactButton:FC = () => {

    const dispatch = useAppDispatch()
    const [name,setName]=useState<string>('');
    const [phone,setPhone]=useState<string>('');

    const handleName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

    const users = useAppSelector(userContactsSelector);

    function  idForNewContact (){
        let maxNum:number=0;
        for(let i:number=0;i<users.length-1;i++){
            if(users[i+1].id>users[i].id){
                maxNum=users[i+1].id;
            }
            else{
                maxNum=users[i].id;
            }
        }
        return maxNum+1;
    }
    const addContact = () => {


        if(name.trim()==='' && phone.trim()===''){
            alert('Введите имя и номер!')
        }
        else if(!phone.match(/^\d+$/)){
            alert('Неверный формат номера');

        }
        else{
            dispatch(addUserContactById({id:idForNewContact(), name:name, email:'example@mail.ru', phone:phone}))}
        }

    return (
        <div>
            <input type="text" placeholder="Имя" onChange={handleName} value={name}/>
            <input type="text" placeholder="Телефон" onChange={handlePhone} value={phone}/>
            <button onClick={addContact}>+ Добавить контакт</button>
        </div>
    );
}; 