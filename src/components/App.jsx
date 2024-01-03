import { nanoid } from 'nanoid'
import { Component } from 'react';

import Form from './CreateForm'
import './All.css'
import data from './data.json'
import ContactList from './ContactList'
import Filter from './Filter'


class App extends Component  {
  
    state = {
      contacts: data,
      filter: ''
  }

  createContact = (data) => {
    const userNew = {
      id: nanoid(),
      ...data
    }

    const isDubl = this.state.contacts.find((el) => el.name === data.name)
    if (isDubl) {
      return alert (`${data.name} is already in contacts`)
    }
      
    
    this.setState((prevState) => ({
        contacts: [...prevState.contacts, userNew]
      }))
  }
  contactDelete = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) =>el.id !== id)
    }))
  }

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  render() {
    const filterContacts = this.getFilteredContacts()
    const { filter } = this.state;
    return (
      <div className='all' >
        <h1 className='title_book'>Phonebook</h1>
        <Form createContact={this.createContact} />
         <Filter value={filter} onChange={this.handleChange} />
        <ContactList contacts={filterContacts}
                     contactDelete={this.contactDelete}/>
        
      </div>
    
    );
  }
};
export {App}