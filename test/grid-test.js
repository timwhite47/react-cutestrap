/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

import { Grid } from '../src';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
let wrapper;

describe('<Grid />', function () {
  describe('className', function () {
    beforeEach(function () {
      wrapper = mount(<Grid className='custom-class' />);
    });

    it('has custom className', function () {
      expect(wrapper.find('section')).to.have.className('custom-class');
    });
  });
  context('default size', function () {
    beforeEach(function () {
      wrapper = mount(<Grid />);
    });

    it('renders <section.grid />', function () {
      expect(wrapper).to.have.descendants('section.grid');
    });
  });

  context('large size', function () {
    beforeEach(function () {
      wrapper = mount(<Grid size='large' />);
    });

    it('renders <section.grid--large />', function () {
      expect(wrapper).to.have.descendants('section.grid--large');
    });
  });

  context('medium size', function () {
    beforeEach(function () {
      wrapper = mount(<Grid size='medium' />);
    });

    it('renders <section.grid--medium />', function () {
      expect(wrapper).to.have.descendants('section.grid--medium');
    });
  });
});
