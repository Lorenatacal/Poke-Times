import React, { Component } from 'react';
import PostConnected, { Post } from './Post';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() });

test('Post should render correctly', () => {
    const wrapper = Enzyme.shallow(<Post />);
    expect(toJson(wrapper)).toMatchSnapshot();
})