import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(loading) {
  let props = {
  course : {}, loading:loading, errors: {},
   onSave: () => {},
   onChange: () => {}
  };

  let renderer =TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output =renderer.getRenderOutput();
return {
  props,
  output,
  renderer
};
}

describe('Course from via React Test Utils',()=>{
   it('renders form and h1',()=>{
    const {output} =setup(false);
    expect(output.type).toBe('form');
    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
    });
  it('save button is labelled as "Save" when not loading', () => {
    const { output } = setup(false);
    const btn =output.props.children[5];
    expect(btn.props.value).toBe('Save');

  });
  it('save button is labelled as "Saving" when loading', () => {
    const { output } = setup(true);
    const btn = output.props.children[5];
    expect(btn.props.value).toBe('Saving...');

  });



});
