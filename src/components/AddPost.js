import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addPost } from '../actions/postActions'

class AddPost extends Component {
    handleClick = () => {
        console.log(this.props)
    }
    render() {
        return (
            <div className="center">
                <button className="btn grey" onClick={this.handleClick}>
                  Add Post
                </button>
            </div>
        )
    }
}

export default AddPost