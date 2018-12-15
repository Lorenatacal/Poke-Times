import React, { Component } from 'react';
import AddFormConnected, { AddForm } from './AddForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

test("AddForm should render correctly", () => {
    const wrapper = Enzyme.shallow(<AddForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
})

test("AddForm should call addPost when the user inputs title, body and clicks submit", () => {
    const spy = jest.fn();
    const props = {
        addPostCallback: spy,
    };
    const wrapper = Enzyme.shallow(<AddForm {...props} />);
    const userTitleInput = wrapper.find('[data-name="userTitle"]');
    userTitleInput.simulate('change', { target: { title: "New Post" } });
    const submitButton = wrapper.find('[data-name="submitForm"]');
    submitButton.simulate('click', { preventDefault() {} });
    // ...CalledWith()
    expect(spy).toHaveBeenCalled();
})