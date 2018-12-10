import React, { Component } from 'react';
import AddFormConnected, { AddForm } from './AddForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

test("AddForm should render correctly", () => {
    const wrapper = Enzyme.shallow(<AddForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
})