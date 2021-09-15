import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { SourceComponent }  from '../../components/SourceComponent';

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
describe('SourceComponent', () => {
  let pageWrapper;

  describe('SourceComponent Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = shallow(       
        <SourceComponent />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render SourceComponent', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
