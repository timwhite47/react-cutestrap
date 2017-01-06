import React from 'react';
import { TextField } from '../src';
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

  describe('value()', function () {
    beforeEach(function () {
      wrapper.find('input').simulate('change', { target: { value: 'some_text_value' } });
    });

    it.only('has correct value', function () {
      console.log(wrapper.instance().value);
    });
  });
});
