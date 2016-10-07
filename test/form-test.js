import React from 'react';
import Form from '../src/form';
import TextField from '../src/text_field';
import { mount } from 'enzyme';
import { expect } from 'chai';
let wrapper;

const htmlOptions = {
  action: '/submit',
  method: 'POST',
};

describe('<Form />', () => {
  context('blank form', () => {
    beforeEach(() => {
      wrapper = mount(<Form
        className='foobar'
        htmlOptions={htmlOptions}
        />);
    });

    it('renders `form` tag', () => {
      const formWrapper = wrapper.find('form');
      expect(formWrapper.length).to.equal(1);
    });

    it('has correct class on form', () => {
      const formWrapper = wrapper.find('form.foobar');
      expect(formWrapper.length).to.equal(1);
    });

    it('has correct `method` passed through ', () => {
      const formWrapper = wrapper.find('[method="POST"]');
      expect(formWrapper.length).to.equal(1);
    });
  });

  context('with children', () => {
    beforeEach(() => {
      wrapper = mount(<Form
        className='foobar'
        htmlOptions={htmlOptions}
        >
          <TextField label='Name' value='Sterling Archer'/>
        </Form>);
    });

    it('renders children inside the form.', () => {
      const inputWrapper = wrapper.find('input[value="Sterling Archer"]');
      expect(inputWrapper.length).to.equal(1);
    });
  });
});
