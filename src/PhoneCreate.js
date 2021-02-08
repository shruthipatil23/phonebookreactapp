import React, {useState} from 'react';
import {Button, Input, InputLabel, FormControl} from '@material-ui/core';
import './PhoneCreate.css';
import db from './firebase';

function PhoneCreate() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const addToPhoneBook = (e) => {
        e.preventDefault();      
        db.collection('PhoneBook').add({
            Name: name,
            PhoneNumber: phone 
        })
        setName('');
        setPhone('');
    }
    
    return (
        <div className="phonecreate"> 
        <h2>Fill out the Phone Details below.</h2>           
            <form className="phonecreate_form">
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input value={name} onChange={event => setName(event.target.value)} />
                </FormControl>  
                <br />  
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input value={phone} onChange={event => setPhone(event.target.value)} />
                </FormControl>
                <br/> 
                <br />              
                <Button onClick={addToPhoneBook} disabled={!phone} type="submit" variant="contained" color="primary">
                    Save
                </Button>            
            </form>            
        </div>
    )
}

export default PhoneCreate
