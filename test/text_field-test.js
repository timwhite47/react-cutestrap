import React from 'react';
import { TextField } from '../src';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

let wrapper;

describe('<TextField />', () => {
  beforeEach(function () {
    this.onChangeStub = sinon.spy();
    wrapper = mount(<TextField label='Name' onChange={this.onChangeStub} value='Sterling Archer'/>);
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
    beforeEach(function (done) {
      this.instance = wrapper.instance();
      this.instance.input = { value: 'some_text_input'};
      done();
    });

    it('has correct value', function () {
      expect(this.instance.value()).to.equal('some_text_input')
    });
  });

  describe('onChange()', function () {
    beforeEach(function (done) {
      wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
      done();
    });

    it('calls onChange', function () {
      expect(this.onChangeStub).to.have.been.calledOnce;
    });

    it('is called with correct params', function () {
      expect(this.onChangeStub).to.have.been.calledWithMatch({target: {value: 'My new value'}})
    });
  });
});
