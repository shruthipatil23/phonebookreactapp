import React from 'react';
import PhoneCreate from './PhoneCreate';
import PhoneBookDisplay from './PhoneBookDisplay';
import './PhoneBook.css';

function PhoneBook() {
    return (
        <div className="phonebook">
            <PhoneCreate className="phonebook_content_left" />
            <PhoneBookDisplay />
        </div>
    )
}

export default PhoneBook
