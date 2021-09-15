import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { DestinationComponent }  from '../../components/DestinationComponent';

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
describe('DestinationComponent', () => {
  let pageWrapper;

  describe('DestinationComponent Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = shallow(       
        <DestinationComponent />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render DestinationComponent', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
