import React from "react";
import Contact from "./Contact";


const ContactList = ({contacts, contactDelete}) => {
    return (contacts.map(el => <Contact contacts={el} key={el.id} contactDelete={contactDelete} />))
}

export default ContactList