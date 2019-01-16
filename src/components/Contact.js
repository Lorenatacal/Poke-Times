import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    position: relative;
`
const StyledForm = styled.form`
    background: #F9F9F9;
    padding: 25px;
    margin: 50px 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`
const StyledTitle = styled.h4`
    color: #C62828;
    margin-left: 40%;
`
const StyleButton = styled.button`
    color: black;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid #C62828;
    border-radius: 3px;
    margin-left: 45%;
`
const StyledTextarea = styled.textarea`
    font-size: 1.5em;
`
const StyledInput = styled.input`
    font-size: 1.5em;
`

export default class Contact extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: '',
            email: '',
            name: '',
            formSubmitted: false
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    
        handleCancel() {
            this.setState({
                message: ''
            });
        }

        handleChange(e) {
            this.setState({
                message: e.target.value,
            });
        }

        handleChangeEmail(e) {
            this.setState({
                email: e.target.value,
            });
        }

        handleChangeName(e) {
            this.setState({
                name: e.target.value,
            });
        }

    handleSubmit(event) {
        console.log(event, 'event')
        console.log('hello')
        event.preventDefault();
        const receiverEmail = process.env.REACT_APP_EMAILJS_USERID;
        const template = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    
      this.sendContact(
          template,
          this.sender,
          receiverEmail,
          this.state.message,
          this.state.email,
          this.state.name,
        );

      this.setState({
          formSubmitted: true
      });
      this.props.history.push('/');
    }

    sendContact (templateId, senderEmail, receiverEmail, message, email, name) {
        window.emailjs
        .send('default_service', templateId, {
                senderEmail,
                receiverEmail,
                message,
                email,
                name
            })
            .then(res => {
                this.setState({
                    formEmailSent: true
                });
            })
            .catch(err => console.error('Failed to send feedback. Error: ', err))
    }

    render() {
        return (
            <StyledContainer>   
                <div>
                    <StyledForm onSubmit={this.handleSubmit} data-name="submit-form">
                        <StyledTitle>Contact Us</StyledTitle>
                        <label>
                            <StyledInput data-name="userName" type="Text" name="name-entry" onChange={this.handleChangeName}  placeholder="Type your name here" required value ={this.state.name}/>
                        </label>
                        <label>
                            <StyledInput data-name="userEmail" id="email-entry" type="Text" name="email-entry" onChange={this.handleChangeEmail} placeholder="Type your email here" required value ={this.state.email}/>
                        </label>
                        <label>
                            <StyledTextarea data-name="userMessage" id="contact-entry" type="Text" name="contact-entry" onChange={this.handleChange} placeholder="Please enter your message here" required value ={this.state.message}/>
                        </label>
                        <div className="btn-group center">
                            <button className="btn btn--cancel grey" >
                                Cancel
                            </button>
                            <input data-name="submitContact" type="submit" value="Submit" className="btn btn--submit grey" />
                            </div>
                    </StyledForm>
                </div>
            </StyledContainer>
        )
    }
}

// Contact.propTypes = {
//     env: PropTypes.object.isRequired
//   };