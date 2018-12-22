import React, { Component } from 'react';
import AddFormConnected, { AddForm } from './AddForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() });

afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
});

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
    global.Math.random = jest.fn(() => 4);

    const userTitleInput = wrapper.find('[data-name="userTitle"]');
    userTitleInput.simulate('change', { target: { value: 'New Post' } });
    const userBodyInput = wrapper.find('[data-name="userBody"]');
    userBodyInput.simulate('change', { target: { value: 'My new body' } });
    const submitButton = wrapper.find('[data-name="submitForm"]');
    submitButton.simulate('click', { preventDefault() {} });

    expect(spy).toHaveBeenCalledWith('4', 'New Post', 'My new body');
    expect(spy).toHaveBeenCalled();
})

test('AddFormConnected should render correctly', () => {
    const initialState = {
    };
    const addPostAction =  { 
        type: 'ADD_POST',
        id: '1',
        title: 'New Title',
        body: 'New Body',
    };
    const store = configureStore()(initialState);

    const wrapper = Enzyme.mount(
        <Provider store={store}>
            <Router>
                <AddFormConnected />
            </Router>
        </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();

})