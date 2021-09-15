import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { Radio }  from '../../components/Radio';

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
describe('Radio', () => {
  let pageWrapper;

  describe('Radio Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = shallow(       
        <Radio />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render Radio', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
