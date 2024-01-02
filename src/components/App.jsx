import { nanoid } from 'nanoid'
import { Component } from 'react';

import First from './CreateForm'
import './All.css'
import data from './data.json'
import ContactList from './ContactList'



class App extends Component  {
  
    state = {
      contacts: data,
      filter: ''
  }

  createContact = (data) => {
    const userNew = {
      ...data,
      id: nanoid()
    }

    const isDubl = this.state.contacts.find((el) => el.name === data.name)
    if (isDubl) return
      
    
    this.setState((prevState) => ({
        contacts: [...prevState.contacts, userNew]
      }))
  }
  contactDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) =>el.id !== id)
    }))
  }
  
  render() {
    return (
      <div className='all' >
        <First createContact={this.createContact} />
        <ContactList contacts={this.state.contacts} contactDelete={this.contactDelete} />
      </div>
    
    );
  }
};
export {App}