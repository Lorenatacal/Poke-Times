import React, { Component } from 'react';
import EditFormConnected, { EditForm } from './EditForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

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