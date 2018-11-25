import React, { Component } from 'react';
import About from './About';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

test("About should render correctly", () => {
    const wrapper = Enzyme.shallow(<About />)
    expect(toJson(wrapper)).toMatchSnapshot();
})