import React, { Component } from 'react';
import AddPost from './AddPost';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

test("AddPost should render correctly", () => {
    const wrapper = Enzyme.shallow(<AddPost />);
    expect(toJson(wrapper)).toMatchSnapshot();
});