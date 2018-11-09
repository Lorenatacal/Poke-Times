import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        })
    }
    
    render() {
        return (
            <div className="center post card">
                <form>
                    <label>
                        <input type="text" name="Your post" />
                    </label>
                    <textarea type="text" onChange={this.handleChange} placeholder="Type here" />
                        <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;