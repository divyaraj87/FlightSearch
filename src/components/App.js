import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import  SourceComponent from './SourceComponent';
import  DestinationComponent from './DestinationComponent';
import Radio from './Radio';
import TableDatePicker from './OneWayDate';
import SubmitButton from './SubmitButton';
import ErrorBoundary from './ErrorBoundary';
import SearchResultOne from './SearchResultOne';
import SearchResultTwo from './SearchResultTwo';
import '../_style.scss';

export class App extends Component {
  render(){
      const { todos: { loadResponse, noReturn, error } } = this.props;
      return (
        <div className="container"> 
        <h1>Agent Application for Flight Booking</h1>
        <Radio /> 
        <div className="city">
           <SourceComponent />   
           <DestinationComponent /> 
          </div> 
         <div className="date">
            <TableDatePicker />
          </div> 
          <SubmitButton />
          {error != '' && <ErrorBoundary />}
          {loadResponse && <SearchResultOne /> }
          {loadResponse && noReturn && <SearchResultTwo /> }
      </div>
      );
  }
 
}

App.prototypes = {
  todos: propTypes.object
}

export const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps,
  { })(App);

