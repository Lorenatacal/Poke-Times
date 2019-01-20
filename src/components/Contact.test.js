

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

    const mockedResponse = {
        default_service: 'Email@gmail.com',
        templateId: '123FR435',
        senderEmail:'Email@yahoo.com',
        receiverEmail: 'Email@gmail.com',
        message: 'New Message',
        email: 'email@yahoo.com',
        name: 'Lorena'
    };
    const event = {
        preventDefault: jest.fn(),
    }
    const wrapper = Enzyme.shallow(<Contact {...props} />);
    const instance = wrapper.instance();
    const handleSubmitSpy = jest.spyOn(instance, 'handleSubmit');
    

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

    // test that handleChange is working 
    expect(instance.state.name).toEqual('Lorena');
    // sebnd contact is called with the right arguments
    // the function send is called with the right args
    // formEmailSent state
}  )