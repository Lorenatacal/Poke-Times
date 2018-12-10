import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'

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
        const id = Math.random().toString();
        // Dispatch Action to add post
        this.props.addPost(id, title, body);
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (id, title, body) => { dispatch(addPost(id, title, body)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);