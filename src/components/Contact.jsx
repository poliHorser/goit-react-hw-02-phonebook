import React from "react";

const Contact = ({ contacts, contactDelete}) => {
    return (
        <li className="con_li">
            <h2 className="li_title"> <span>{contacts.name}</span>  {contacts.number}</h2>
            <button className="li_btn" onClick={() => contactDelete(contacts.id)} >Delete</button>
            
        </li>
    )
}

export default Contact