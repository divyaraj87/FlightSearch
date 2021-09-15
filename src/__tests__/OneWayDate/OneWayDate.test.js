import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { OneWayDate }  from '../../components/OneWayDate';

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
describe('OneWayDate', () => {
  let pageWrapper;

  describe('OneWayDate Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = shallow(       
        <OneWayDate />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render OneWayDate', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
