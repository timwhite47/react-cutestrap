import { Button } from '../src';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
let wrapper;
let onClick;

describe('<Button />', function () {
  beforeEach(function () {
    onClick = sinon.spy();
    wrapper = mount(<Button className='foobar' onClick={onClick} value='CLICK ME' />);
  });

  it('renders with correct classname', function () {
    expect(wrapper.find('button')).to.have.className('btn--primary');
  });

  it('renders with passed in className', function () {
    expect(wrapper.find('button')).to.have.className('foobar');
  });

  describe('onClick', function () {
    beforeEach(function (done) {
      wrapper.find('button').simulate('click');
      done();
    });

    it('triggers onClick prop', function () {
      expect(onClick.callCount).to.equal(1);
    });
  });
});
