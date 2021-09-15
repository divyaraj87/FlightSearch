import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import  ErrorBoundary   from '../../components/ErrorBoundary';

const dispatchSelectChangeSpy = sinon.spy();
const dispatchProgressChangeSpy = sinon.spy();
const todos = {
  error: 'error'
};
const error= 'error';
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
describe('ErrorBoundary', () => {
  let pageWrapper;

  describe('ErrorBoundary Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = shallow( <Provider>  
        <ErrorBoundary />   </Provider>    
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render ErrorBoundary', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
