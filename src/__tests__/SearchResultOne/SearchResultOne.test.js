import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { SearchResultOne }  from '../../components/SearchResultOne';

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
describe('SearchResultOne', () => {
  let pageWrapper;

  describe('SearchResultOne Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = shallow(       
        <SearchResultOne />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render SearchResultOne', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
