import React, { PureComponent } from 'react';
import { Prompt } from "react-router-dom";

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            number: '',
            click:'0'
        }
    }

    onInputChange = e => this.setState({[e.target.name]: e.target.value});
    formValidate = (e) => {
        e.preventDefault();
          this.setState({ click: 1 });
          this.handleSubmit();
    }

    handleSubmit = () => {
        const { name, number } = this.state;
        this.props.addDataHandler({ name, number });
        this.setState({name: '', number: '' }, () => {
            console.log(this.state, '###########');
        });
    };
    
    render() {
        return (
            <div className="for-form">
            <form onSubmit={this.formValidate}>
                <h1>Contact Form</h1>
                Name:
                <input
                    type='text'
                    onChange={this.onInputChange}
                    value={this.state.name}
                    name="name"
                />
                <br />
                Phone No:
                <input
                    type='number'
                    onChange={this.onInputChange}
                    value={this.state.number}
                    name="number"
                />
                <br/>
                <input type="submit"/>

                {
                    this.props.data.length > 0 && this.props.data.map((user, index) => {
                        return (
                            <div key={index}>
                              ( {user.name}): :({user.number})
                            </div>
                        )
                    })
                }
                <Prompt
                    when={(this.state.click==='0')}
                    message="Are you sure you want to exit?"
                />
            </form>
            </div>
        )
    }
}
export default Contact;
