import React from "react";

const Contact = ({ contacts, contactDelete}) => {
    return (
        <li className="con_li">
            <h2 > {contacts.name}</h2>
            <p> {contacts.number}</p>
            <button onClick={() => contactDelete(contacts.id)} >Delete</button>
            
        </li>
    )
}

export default Contact