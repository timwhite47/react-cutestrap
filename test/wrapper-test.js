import React from 'react';
import Wrapper from '../src/wrapper';
import { expect } from 'chai';
import { mount } from 'enzyme';

let wrapper;
let size;

describe('<Wrapper />', function () {
  beforeEach(function () {

  });

  describe('size', function () {
    context('small', function () {
      beforeEach(function () {
        size = 'small';
        wrapper = mount(<Wrapper size={size}/>);
      });

      it('has correct div classname', function () {
        expect(wrapper.find('div')).to.have.className('wrapper-small');
      });
    });

    context('normal', function () {
      beforeEach(function () {
        size = null;
        wrapper = mount(<Wrapper size={size}/>);
      });

      it('has correct div classname', function () {
        expect(wrapper.find('div')).to.have.className('wrapper');
      });
    });

    context('large', function () {
      beforeEach(function () {
        size = 'large';
        wrapper = mount(<Wrapper size={size}/>);
      });

      it('has correct div classname', function () {
        expect(wrapper.find('div')).to.have.className('wrapper-large');
      });
    });
  });
});
