import React, { Component } from 'react';
import Contact from './Contact';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

test("Contact should render correctly", () => {
    const wrapper = Enzyme.shallow(<Contact />)
    expect(toJson(wrapper)).toMatchSnapshot();
})