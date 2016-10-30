/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

import { Text } from '../src';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
let wrapper;
describe('<Text />', function () {
  context('default', function () {
    beforeEach(function () {
      wrapper = mount(<Text>{"Hello World!"}</Text>);
    });

    it('renders a normal <p /> tag', function () {
      console.log(wrapper.debug());
    });
  });

  describe('align', function () {
    context('left', function () {
      beforeEach(function () {
        wrapper = mount(<Text align='left'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className to align left', function () {
        expect(wrapper.find('p')).to.have.className('ta-left');
      });
    });

    context('right', function () {
      beforeEach(function () {
        wrapper = mount(<Text align='right'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className to align right', function () {
        expect(wrapper.find('p')).to.have.className('ta-right');
      });
    });

    context('center', function () {
      beforeEach(function () {
        wrapper = mount(<Text align='center'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className to align center', function () {
        expect(wrapper.find('p')).to.have.className('ta-center');
      });
    });
  });

  describe('size', function () {
    context('small', function () {
      beforeEach(function () {
        wrapper = mount(<Text size='small'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className for small size', function () {
        expect(wrapper.find('p')).to.have.className('fs-small');
      });
    });

    context('base', function () {
      beforeEach(function () {
        wrapper = mount(<Text size='base'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className for base size', function () {
        expect(wrapper.find('p')).to.have.className('fs-base');
      });
    });

    context('large', function () {
      beforeEach(function () {
        wrapper = mount(<Text size='large'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className for large size', function () {
        expect(wrapper.find('p')).to.have.className('fs-large');
      });
    });
  });

  describe('weight', function () {
    context('light', function () {
      beforeEach(function () {
        wrapper = mount(<Text weight='light'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className for light font weight', function () {
        expect(wrapper.find('p')).to.have.className('fw-light');
      });
    });

    context('normal', function () {
      beforeEach(function () {
        wrapper = mount(<Text weight='normal'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className for normal font weight', function () {
        expect(wrapper.find('p')).to.have.className('fw-normal');
      });
    });

    context('semibold', function () {
      beforeEach(function () {
        wrapper = mount(<Text weight='semibold'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className for semibold font weight', function () {
        expect(wrapper.find('p')).to.have.className('fw-semibold');
      });
    });

    context('bold', function () {
      beforeEach(function () {
        wrapper = mount(<Text weight='bold'>{"Hello World!"}</Text>);
      });

      it('renders a p tag with className for bold font weight', function () {
        expect(wrapper.find('p')).to.have.className('fw-bold');
      });
    });
  });
});
