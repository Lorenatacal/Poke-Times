import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom'
import Form from './Form'

class AddPost extends Component {
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