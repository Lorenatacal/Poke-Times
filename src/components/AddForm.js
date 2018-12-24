import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator } from '../actions/postActions'

let startingId = 3;

export function generateId() {
    startingId = startingId + 1;
    return startingId;
}

export class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            title: event.target.value,
        })
    }

    handleBody(event) {
        this.setState({
            body: event.target.value,
        })  
    }
    handleSubmit(e) {
        e.preventDefault();
        const title = this.state.title;
        const body = this.state.body;
        const id = generateId().toString();
        // Dispatch Action to add post
        this.props.addPostCallback(id, title, body);
        this.setState({
            title: '',
            body: '',
        });
    }
    
    render() {
        return (
            <div className="center post card">
                <form onSubmit={this.handleSubmit}>
                    <input data-name="userTitle" value={this.state.title} onChange={this.handleChange} placeholder="Your title" />
                    <textarea data-name="userBody" value={this.state.body} onChange={this.handleBody} placeholder="Insert the post body" />
                    <button data-name="submitForm" onClick={this.handleSubmit} type="Submit">Submit </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostCallback: (id, title, body) => { dispatch(addPostActionCreator(id, title, body)) },
    }
}

export default connect(null, mapDispatchToProps)(AddForm);