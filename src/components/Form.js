import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            body: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }

    handleBody(event) {
        this.setState({
            body: event.target.value,
        })  
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.value + '\n' + this.state.body);
        const value = this.state.value;
        const body = this.state.body;
        this.setState({
            value: '',
            body: '',
        });
    }
    
    render() {
        return (
            <div className="center post card">
                <form onSubmit={this.handleSubmit}>
                    <label id="mainInput">
                        Type your post bellow:
                        <input value={this.state.value} onChange={this.handleChange} placeholder="Your title" />
                        <textarea value={this.state.body} onChange={this.handleBody} placeholder="Insert the post body" />
                    </label>
                    <button onClick={this.handleSubmit} type="Submit">Submit </button>
                    {/* <input type="submit" value={this.state.myCustomPropertyThatRepresentsThisUserInput} check controlled react forms/input />  */}
                </form>
            </div>
        )
    }
}

export default Form