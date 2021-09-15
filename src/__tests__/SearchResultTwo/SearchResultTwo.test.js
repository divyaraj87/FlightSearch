import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import  configureMockStore from 'redux-mock-store';
import { SearchResultTwo }  from '../../components/SearchResultTwo';

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
describe('SearchResultTwo', () => {
  let pageWrapper;

  describe('SearchResultTwo Page', () => {
    const originalProps = { ...mockProps };

    beforeEach(() => {
      pageWrapper = shallow(       
        <SearchResultTwo />       
      );
    });

    afterEach(() => {
      mockProps = { ...originalProps };
    });

    it('should render SearchResultTwo', () => {
      expect(pageWrapper).toMatchSnapshot();
    });
  });
});
