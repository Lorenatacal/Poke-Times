import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom'
import Form from './Form'

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }
   _onButtonClick() {
       this.setState({
           showComponent: true,
       });
   }
    render() {
        return (
            <div className="center">
                <button className="btn grey" onClick={this._onButtonClick}>
                  Add Post
                </button>
                {this.state.showComponent ?
                    <Form /> :
                    null
                }
            </div>
        );
    }
}

export default AddPost