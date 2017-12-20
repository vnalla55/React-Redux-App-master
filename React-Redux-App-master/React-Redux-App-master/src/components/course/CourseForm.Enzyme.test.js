import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(loading) {
 const props = {
    course: {}, loading: loading, errors: {},
    onSave: () => { },
    onChange: () => { }
  };
 return shallow(<CourseForm {...props}/>)
}

describe('Course Form testing using enzyme',()=>{
it('renders form and h1', () => {
  const wrapper = setup(false);
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h1').text()).toEqual('Manage Course');
});

it('save button is labelled "save" when not loading form', () => {
  const wrapper = setup(false);
  expect(wrapper.find('input').props().value).toBe('Save');
});

it('save button is labelled "saving" when loading form', () => {
  const wrapper = setup(true);
  expect(wrapper.find('input').props().value).toBe('Saving...');
});
});
