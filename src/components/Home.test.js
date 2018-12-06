import React, { Component } from 'react';
import HomeConnected, { Home } from './Home';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() })

test("Home should render correctly with posts", () => {
    const props = {
        posts: [
            {id: '1', title: 'First title', body: 'This is my body'},
            {id: '2', title: 'Second title', body: 'This is the second body'},
            {id: '3', title: 'Third title', body: 'This is my third body'},
        ],
    };
    const wrapper = Enzyme.shallow(<Home posts={props.posts}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("Home should render correctly without posts", () => {
    const props = {
        posts: [  
        ],
        comments: [],
    };
    const wrapper = Enzyme.shallow(<Home {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test("HomeConnected should render correctly", () => {
    const initialState = {
        posts: [
            {id: '1', title: 'First title', body: 'This is my body'},
            {id: '2', title: 'Second title', body: 'This is the second body'},
            {id: '3', title: 'Third title', body: 'This is my third body'},
        ],
    };
    const store = configureStore()(initialState);
    const wrapper = Enzyme.mount(
    <Provider store={store}>
        <Router>
            <HomeConnected />
        </Router>
    </Provider>);
    expect(toJson(wrapper)).toMatchSnapshot();
});
