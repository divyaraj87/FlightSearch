import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { SubmitButton }  from '../../components/SubmitButton';

const dispatchSelectChangeSpy = sinon.spy();
const dispatchProgressChangeSpy = sinon.spy();
let mockProps = {
    bgcolor: '#000',
    completed: 10,
    width: 10,
    error: 'error',
    todos: {
      error: 'error'
    }
};
const mockStore = configureMockStore();
const store = mockStore({});
describe('SubmitButton', () => {
  let pageWrapper;

  describe('SubmitButton Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = shallow(       
        <SubmitButton />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render SubmitButton', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
