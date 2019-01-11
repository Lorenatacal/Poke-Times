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
        state = {
            contact: '',
            email: '',
            name: '',
            formSubmitted: false
        };

    handleCancel = this.handleCancel.bind(this);
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

        static sender = 'sender@example.com';
    
        handleCancel() {
            this.setState({
                contact: ''
            });
        }

        handleChange(e) {
            this.setState({
                contact: e.target.value,
            });
        }

    handleSubmit(event) {
        event.preventDefault();

        const receiverEmail = 'lorena.tacal@yahoo.com';
        const template = 'template_oW3Ymk9r';
    
      this.sendContact(
          template,
          this.sender,
          receiverEmail,
          this.state.contact
        );

      this.setState({
          formSubmitted: true
      });
      this.props.history.push('/');
    }

    sendContact (templateId, senderEmail, receiverEmail, contact) {
        window.emailjs
        .send('mailgun', templateId, {
                senderEmail,
                receiverEmail,
                contact
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
                    <StyledForm onSubmit={this.handleSubmit}>
                        <StyledTitle>Contact Us</StyledTitle>
                        <label>
                            <StyledInput type="Text" name="name-entry"  placeholder="Type your name here" />
                        </label>
                        <label>
                            <StyledInput id="email-entry" type="Text" name="email-entry" placeholder="Type your email here" />
                        </label>
                        <label>
                            <StyledTextarea id="contact-entry" type="Text" name="contact-entry" onChange={this.handleChange} placeholder="Please enter your message here" required value ={this.state.contact}/>
                        </label>
                        <div className="btn-group center">
                            <button className="btn btn--cancel grey" >
                                Cancel
                            </button>
                            <input type="submit" value="Submit" className="btn btn--submit grey" />
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