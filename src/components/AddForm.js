import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator } from '../actions/postActions'

export class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingId: 3,
            title: '',
            body: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateId = this.generateId.bind(this);
    }

    generateId() {
        const { startingId } = this.state;
        this.setState({ startingId: startingId + 1 });
        return startingId + 1;
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
        const id = this.generateId().toString();
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