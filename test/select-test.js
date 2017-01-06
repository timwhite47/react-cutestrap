import { Select } from '../src';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
describe('<Select />', function () {
  beforeEach(function () {
    this.wrapper = mount(<Select
      className='my_classname'
      label="Select Something"
      options={[
        {
          label: 'Thing 1',
          value: 'thing_1',
        },
        {
          label: 'Thing 2',
          value: 'thing_2',
        },
        {
          label: 'Thing 3',
          value: 'thing_3',
        }
      ]}
    />);
  });

  it('default value', function () {
    expect(this.wrapper.instance().value()).to.equal('thing_1')
  });

  it('has correct labels', function () {
    expect(this.wrapper).to.contain.text('Thing 1')
    expect(this.wrapper).to.contain.text('Thing 2')
    expect(this.wrapper).to.contain.text('Thing 3')
  });
})
