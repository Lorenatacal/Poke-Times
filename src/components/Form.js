import React, {Component} from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="text" name="Your post" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;