

import React, { Component } from 'react';
import axios from 'axios';
import Contact from './Contact';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import MockAdapter from 'axios-mock-adapter';

Enzyme.configure({ adapter: new Adapter() });

test("Contact should render correctly", () => {
    const wrapper = Enzyme.shallow(<Contact />)
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("Contact us should render correctly on Submit", () => {
    const props = {
         history: {
             push: jest.fn(),
         }
    };
    global.emailjs = {}; // mock emailjs as empty
    global.emailjs.send = jest.fn().mockImplementationOnce(() =>
         new Promise((resolve, reject) => resolve(1)));
    global.emailjs.send.then = jest.fn();

    const event = {
        preventDefault: jest.fn(),
    }
    const wrapper = Enzyme.shallow(<Contact {...props} />);
    const instance = wrapper.instance();
    const handleSubmitSpy = jest.spyOn(instance, 'handleSubmit');
    const sendContactSpy = jest.spyOn(instance, 'sendContact');


    const userName=wrapper.find('[data-name="userName"]');
    userName.simulate('change', { target: { value: 'Lorena' } });
    const userEmail=wrapper.find('[data-name="userEmail"]');
    userEmail.simulate('change', { target: { value: 'email@yahoo.com' } });
    const userMessage=wrapper.find('[data-name="userMessage"]');
    userMessage.simulate('change', { target: { value: 'New Message' } });
    const submitButton = wrapper.find('[data-name="submitContact"]');
    submitButton.simulate('click', { preventDefault() {} });
    const form = wrapper.find('[data-name="submit-form"]');
    form.simulate('submit', { preventDefault() {} });

    expect(instance.state.name).toEqual('Lorena');
    expect(instance.state.email).toEqual('email@yahoo.com');
    expect(instance.state.message).toEqual('New Message');
    expect(sendContactSpy).toHaveBeenCalledWith(
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        process.env.REACT_APP_EMAILJS_USERID,  
        'New Message', 
        'email@yahoo.com', 
        'Lorena'
    )
    // sendContact is called with the right arguments
    // the function send is called with the right args
    // formEmailSent state
}  )