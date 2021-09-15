import { SELECT_CITY } from '../constants';

export const initialState = {
  loadResponse: false,
  spinnerEnable: false,
  apiRsponse: [],
  sourceSelected: [],
  destSelected: [],
  trip: '',
  noReturn: false,
  startDate: '',
  error: ''
};

export const todos = (state = initialState, action = {}) => {
  switch(action.type){    
    case SELECT_CITY: {      
      return {
        ...state,
        [action.fieldName]: action.value
      }
    }
    default: {
      return state;
    }
  }

};

export default todos;