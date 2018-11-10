import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }
    
    render() {
        return (
            <div className="center post card">
                <form>
                    <input type="text" placeholder="Your title" />
                    <textarea type="text" onChange={this.handleChange} placeholder="Insert the post body" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;