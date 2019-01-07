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

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }  
    }
    render() {
        return (
            <StyledContainer>   
                <styledDiv>
                    <StyledForm>
                        <StyledTitle>Contact Us</StyledTitle>
                        <label>
                            <StyledInput type="Text" placeholder="Type your name here"/>
                        </label>
                        <label>
                            <StyledInput type="Text" placeholder="Type your email here"/>
                        </label>
                        <label>
                            <StyledTextarea placeholder="Please enter your message here" />
                        </label>
                        <StyleButton type="Submit">Submit</StyleButton>
                    </StyledForm>
                </styledDiv>
            </StyledContainer>
        )
    }
}

export default Contact