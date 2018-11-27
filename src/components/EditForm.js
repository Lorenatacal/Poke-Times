import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editPost } from '../actions/postActions'

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.post.title,
            body: this.props.post.body,
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
        const id = this.props.post.id;
        this.props.editPost(id, title, body);
        this.setState({
            title: '',
            body: '',
        });
    }
    
    render() {
        return (
            <div className="center post card">
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.title} onChange={this.handleChange} placeholder="Your title" />
                    <textarea value={this.state.body} onChange={this.handleBody} placeholder="Insert the post body" />
                    <button onClick={this.handleSubmit} type="Submit">Submit </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editPost: (id, title, body) => { dispatch(editPost(id, title, body)) },
    }
}

export default connect(null, mapDispatchToProps)(EditForm);