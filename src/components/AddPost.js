import React, {Component} from 'react'
import { connect } from 'react-redux';

class AddPost extends Component {
    handleClick = () => {
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