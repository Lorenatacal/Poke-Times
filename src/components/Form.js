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
        console.log(this.state.value + '\n' + this.state.body);
        e.preventDefault();
    }
    
    render() {
        return (
            <div className="center post card">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} placeholder="Your title" />
                    <textarea type="text" onChange={this.handleBody} placeholder="Insert the post body" />
                    <input type="submit" value="Submit" />
                </form>
                <p> {this.state.value} </p>
                <p> {this.state.body} </p>
            </div>
        )
    }
}

export default Form