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

test("AddPost should render correctly onClick", () => {
    const wrapper = Enzyme.shallow(<AddPost />);
    const AddPostButton = wrapper.find('[data-name="AddPostButton"]');
    AddPostButton.simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
})