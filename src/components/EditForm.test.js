import React, { Component } from 'react';
import EditFormConnected, { EditForm } from './EditForm';
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
    const editSpy = jest.fn();
    const pushSpy = jest.fn();
    const props = {
        post : {
            title: 'First post',
            body: 'First body',
            id: '2',
        },
        history: {
            push: pushSpy,
        },
        editPost: editSpy,
    };
    const wrapper = Enzyme.shallow(<EditForm {...props} />);

    const userEditTitleInput = wrapper.find('[data-name="userEditTitle"]');
    userEditTitleInput.simulate('change', { target: { value: 'First post edited' } });
    const userEditBodyInput = wrapper.find('[data-name="userEditBody"]');
    userEditBodyInput.simulate('change', { target: { value: 'First body edited' } });
    const submitEdit = wrapper.find('[data-name="EditSubmit"]');
    submitEdit.simulate('click', { preventDefault() {} });

    expect(editSpy).toHaveBeenCalledWith('2', 'First post edited', 'First body edited');
})

test('EditFormConnected should dispatch EDIT_POST action', () => {
    const initialState = {
        posts: [
            {id: '1', title: 'First title', body: 'This is my body'},
            {id: '2', title: 'Second title', body: 'This is the second body'},
            {id: '3', title: 'Third title', body: 'This is my third body'},
        ],
    };
    const editFormAction = {
        type: 'EDIT_POST',
        id: '2',
        title: 'First post edited',
        body: 'First body edited',
    };
    const pushSpy = jest.fn();
    const props = {
        post : {
            title: 'First post',
            body: 'First body',
            id: '2',
        },
        history: {
            push: pushSpy,
        },
    };
    const store = configureStore()(initialState);

    const wrapper = Enzyme.mount(
        <Provider store = {store}>
            <Router>
                <EditFormConnected {...props} />
            </Router>
        </Provider>
    );

    const userEditTitleInput = wrapper.find('[data-name="userEditTitle"]');
    userEditTitleInput.simulate('change', { target: { value: 'First post edited' } });
    const userEditBodyInput = wrapper.find('[data-name="userEditBody"]');
    userEditBodyInput.simulate('change', { target: { value: 'First body edited' } });
    const submitEdit = wrapper.find('[data-name="EditSubmit"]');
    submitEdit.simulate('click', { preventDefault() {} });

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(store.getActions()).toEqual([editFormAction]);

})