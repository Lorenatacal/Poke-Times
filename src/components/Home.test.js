import React, { Component } from 'react';
import HomeConnected, { Home } from './Home';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
// import configureMockStore from 'redux-mock-store';

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
})