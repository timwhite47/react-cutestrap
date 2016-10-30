/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

import { Column } from '../src/';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
let wrapper;

describe('<Column />', function () {

  context('default weight', function () {
    beforeEach(function () {
      wrapper = mount(<Column />);
    });
    it('should render a simple <div />', function () {
      expect(wrapper).to.have.descendants('div');
    });
  });

  context('heavy weight', function () {
    beforeEach(function () {
      wrapper = mount(<Column weight='heavy'/>);
    });

    it('should render a heavy column', function () {
      expect(wrapper.find('div')).to.have.className('column--heavy');
    });
  });

  context('light weight', function () {
    beforeEach(function () {
      wrapper = mount(<Column weight='light'/>);
    });
    it('should render a light column', function () {
      expect(wrapper.find('div')).to.have.className('column--light');
    });
  });
});
