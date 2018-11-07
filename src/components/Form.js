import React, {Component} from 'react'

class Form extends Component {
    
    render() {
        return (
            <div className="center post card">
                <form>
                    <label>
                        <input type="text" name="Your post" />
                    </label>
                    <textarea>Type your post here</textarea>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;