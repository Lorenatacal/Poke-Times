import React, { Component } from 'react';
import NavBar from './NavBar';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { BrowserRouter as Router } from 'react-router-dom';


Enzyme.configure({ adapter: new Adapter() });

test('NavBar should render correctly', () => {
    const wrapper = Enzyme.mount(
        <Router>
            <NavBar />
        </Router>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
})