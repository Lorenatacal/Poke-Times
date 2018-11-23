import React from 'react'
import Form from './Form'

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
                <button className="btn grey" onClick={this.onClick}>
                  Add Post
                </button>
                { this.state.showComponent && <Form /> }
            </div>
        );
    }
}

export default AddPost