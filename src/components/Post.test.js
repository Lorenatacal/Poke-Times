import React, { Component } from 'react';
import PostConnected, { Post } from './Post';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() });

test('Post should render correctly without posts', () => {
    const wrapper = Enzyme.shallow(<Post />);
    expect(toJson(wrapper)).toMatchSnapshot();
})

test('Post should render correctly with posts', () => {
    const props = {
        post: {
            id: '1', 
            title: 'First title', 
            body: 'This is my body',
        },
    };
    const wrapper = Enzyme.shallow(<Post {...props}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
})

test('Post should call deletePost when the user clicks delete', () => {
    const deleteSpy = jest.fn();
    const pushSpy = jest.fn();
    const props = {
        post : {
            id: '2',
        },
        history: {
            push: pushSpy,
        },
        deletePost: deleteSpy,
    };
    const wrapper = Enzyme.shallow(<Post {...props} />)

    const deletePost = wrapper.find('[data-name="deleteSubmit"]');
    deletePost.simulate('click');
    expect(deleteSpy).toHaveBeenCalledWith('2');
})

test('Post should call editPost when the user clicks Edit Post', () => {
    const props = {
        post: {
            id: '1', 
            title: 'First title', 
            body: 'This is my body',
        },
    };
    const wrapper = Enzyme.shallow(<Post {...props} />);
    const editButton = wrapper.find('[data-name="editButton"]');
    editButton.simulate('click');
    expect(wrapper.state('showComponent')).toEqual(true);
})