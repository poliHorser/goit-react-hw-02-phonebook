import React, { Component } from 'react';
import './createForm.css'

class Form extends Component {

    
    state = {
        name: '',
        number: ''
    }
   
    handleChange = ({ target: { value, name } }) => {
        console.log('value:', value)
        return this.setState({
            [name]: value.trim() 
        })
       
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.createContact(this.state)
        this.setState({
            name: " ",
            number: " "
        })
    }


    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
            <div>
                <h2 className='title'>Name</h2>
                <input className='input'
                       type="text"
                       name="name"   
                       value={this.state.name}
                       onChange={this.handleChange}
                    required />
                <label htmlFor=''></label>
            </div>
            <div>
                <h2 className='title'>Number</h2>
                <input className='input'
                       type="tel"
                       name="number"   
                       value={this.state.number}
                       onChange={this.handleChange}
                    required />
                <label htmlFor=''></label>
            </div>
             <button className='btn'>
                    <p> Add to contact list</p>
                </button>
            </form>
        )
    }
}
export default Form