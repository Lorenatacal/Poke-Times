import React, { Component } from 'react';
import EditFormConnected, { EditForm } from './EditForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
});

test('EditForm should render correctly', () => {
    const props = {
        post : {
            title: 'First post',
            body: 'First body',
        }
    }
    const wrapper = Enzyme.shallow(<EditForm {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot();
})

test('EdidForm should call editPost when the user inputs title, body and clicks submit', () => {
    const spy = jest.fn();
    const props = {
        post : {
            title: 'First post',
            body: 'First body',
            id: '2',
        },
        editPost: spy,
    };
    const wrapper = Enzyme.shallow(<EditForm {...props} />);

    const userEditTitleInput = wrapper.find('[data-name="userEditTitle"]');
    userEditTitleInput.simulate('change', { target: { value: 'First post edited' } });
    const userEditBodyInput = wrapper.find('[data-name="userEditBody"]');
    userEditBodyInput.simulate('change', { target: { value: 'First body edited' } });
    const submitEdit = wrapper.find('[data-name="EditSubmit"]');
    submitEdit.simulate('click', { preventDefault() {} });

    expect(spy).toHaveBeenCalledWith('2', 'First post edited', 'First body edited');
    expect(spy).toHaveBeenCalled();
})