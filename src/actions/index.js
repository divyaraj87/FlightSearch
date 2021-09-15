import { SELECT_CITY, FETCH_URL, SOURCE } from '../constants';
import fetch from 'unfetch';

export function fieldLoad(fieldName, value){
  return(dispatch, getState) =>{
    const { todos: {sourceSelected, destSelected} } = getState();
   
    if(fieldName == 'trip'){
      value = document.querySelector('input[name="gender"]:checked').value;
      if(value == 'Return'){
        dispatch(fieldLoad('noReturn', true));
      }
      if(value == 'One Way'){
        dispatch(fieldLoad('noReturn', false));
      }
    }
    if(fieldName == 'loadResponse'){
      if(document.querySelector('input[name="gender"]:checked') == null){
        dispatch(fieldLoad('error', "Enter One Way/ Return"));
        return;
      }
      else if(sourceSelected.length == 0){
        dispatch(fieldLoad('error', "Enter Source"));
        return;
      }
      else if(destSelected.length == 0){
        dispatch(fieldLoad('error', "Enter Destination"));
        return;
      }else{
        dispatch(fieldLoad('error', ""));
      }
    }
    dispatch({
      type: SELECT_CITY,
      fieldName,
      value
    });
  };
}

/*export function getExternalScript(){
  return(dispatch, getState) =>{
    const { todos } = getState();
     dispatch(fieldLoad('spinnerEnable', true));
    fetch(FETCH_URL).then(res => res.json()).then((response) => {
      dispatch(fieldLoad('apiRsponse', response));      
    }) 
  };
}*/

