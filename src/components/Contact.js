import React from 'react'

const Contact = (props) => {
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <div className="center post card">
                <form>
                    Surname: 
                    <input  type="text" name="surname" placeholder="Type your surname here"/>
                    First Name:
                    <input type="Text" name="firstName" placeholder="Type your first name here"/>
                    Email address:
                    <input type="Text" name="email" placeholder="Type your email here"/>
                    Message:
                    <textarea placeholder="Please enter your message here" />
                    <button className="center" type="Submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact