import React, { Component } from 'react';
import data from './data.json'

class First extends Component {

    
    state = {
        contacts: data,
        filter: '',
        name: '',
        number: ''
    }
   
    handleChange = ({ target: { value, name } }) => {
        console.log('value:', value)
        return this.setState({
            [name]: value 
        })
       
    }

    createContact = () => {
        
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
        return (<form className='div' onSubmit={this.handleSubmit}>
            <div>
                <h2 className='title'>Name</h2>
                <input className='input'
                       type="text"
                       name="name"   
                       value={this.state.name}
                       onChange={this.handleChange}
                    required />
                <label for=""></label>
            </div>
            <div>
                <h2 className='title'>Number</h2>
                <input className='input'
                       type="tel"
                       name="number"   
                       value={this.state.number}
                       onChange={this.handleChange}
                    required />
                <label for=""></label>
            </div>
             <button className='btn'>
                    <p> Add to contact list</p>
                </button>
            </form>
        )
    }
}
export default First