import React from 'react';
import TextField from '../src/text_field';
import { mount } from 'enzyme';
import { expect } from 'chai';
let wrapper;

describe('<TextField />', () => {
  beforeEach(() => {
    wrapper = mount(<TextField label='Name' value='Sterling Archer'/>);
  });

  it('renders with default value', () => {
    const inputWrapper = wrapper.find('input[value="Sterling Archer"]');
    expect(inputWrapper.length).to.equal(1);
  });

  it('renders with corect label', () => {
    const inputWrapper = wrapper.find('span.textfield__label');
    expect(inputWrapper.text()).to.equal('Name');
  });
});
