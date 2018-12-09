import React from 'react'
import AddForm from './AddForm'

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.onClick = this.onClick.bind(this);
    }

   onClick() {
       this.setState({
           showComponent: true,
       });
   }

    render() {
        return (
            <div className="center">
                <button data-name="AddPostButton" className="btn grey" onClick={this.onClick}>
                  Add Post
                </button>
                { this.state.showComponent && <AddForm /> }
            </div>
        );
    }
}

export default AddPost