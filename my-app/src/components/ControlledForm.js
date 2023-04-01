import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: ''
        }
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value 
        })
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form>
                    <div>
                        <label htmlFor='id-name'>Your name:</label>
                        <input 
                            value={this.state.name} 
                            onChange={this.handleNameChange}
                            id='id-name' 
                            name='name' 
                            type="text" 
                        />
                    </div>
                    <div>
                        <label htmlFor='id-category'>Query category:</label>
                        <select id='id-category' name='category'>
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General enquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='id-comments'>Comments:</label>
                        <textarea id='id-comments' name='comments' />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm