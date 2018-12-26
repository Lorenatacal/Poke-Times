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

test("generateId should increment and return a number starting from 3", () => {
    const wrapper = Enzyme.shallow(<AddForm />);
    expect(wrapper.instance().generateId()).toEqual(4);
    expect(wrapper.instance().generateId()).toEqual(5);
    expect(wrapper.instance().generateId()).toEqual(6);
})

test("AddForm should render correctly", () => {
    const wrapper = Enzyme.shallow(<AddForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
})

test("AddForm should call addPost when the user inputs title, body and clicks submit", () => {
    const addPostCallbackSpy = jest.fn();
    const props = {
        addPostCallback: addPostCallbackSpy,
    };
    const wrapper = Enzyme.shallow(<AddForm {...props} />);

    const userTitleInput = wrapper.find('[data-name="userTitle"]');
    userTitleInput.simulate('change', { target: { value: 'New Post' } });
    const userBodyInput = wrapper.find('[data-name="userBody"]');
    userBodyInput.simulate('change', { target: { value: 'My new body' } });
    const submitButton = wrapper.find('[data-name="submitForm"]');
    submitButton.simulate('click', { preventDefault() {} });

    expect(addPostCallbackSpy).toHaveBeenCalledWith('4', 'New Post', 'My new body');
    expect(addPostCallbackSpy).toHaveBeenCalled();
})

test('AddFormConnected should should dispatch ADD_POST action', () => {
    const initialState = {
    };
    const addPostAction =  { 
        type: 'ADD_POST',
        id: '4',
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

    const userTitleInput = wrapper.find('[data-name="userTitle"]');
    userTitleInput.simulate('change', { target: { value: 'New Title' } });
    const userBodyInput = wrapper.find('[data-name="userBody"]');
    userBodyInput.simulate('change', { target: { value: 'New Body' } });
    const submitButton = wrapper.find('[data-name="submitForm"]');
    submitButton.simulate('click', { preventDefault() {} });

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(store.getActions()).toEqual([addPostAction]);
})  