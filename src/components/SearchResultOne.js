import React, { Component} from 'react';
import propTypes from 'prop-types';
import {connect } from 'react-redux';
import { fieldLoad } from '../actions';

export class SearchResultOne extends Component {
    render(){
        const {todos: { destSelected, sourceSelected }} = this.props;
        return (
            <div class="resultOneContainer">               
               <table>
                   <thead>
                       <tr>
                           <td colspan="3">{sourceSelected[0].label}</td>
                           <td colspan="1">TO</td>
                           <td colspan="3">{destSelected[0].label}</td>
                        </tr>
                       <tr>
                           <td>Flight No.</td>
                           <td>Flight Name</td>
                           <td>Departure Time</td>
                           <td>Arrival Time</td>
                           <td>Duration</td>
                           <td>No. of Stops</td>
                           <td>Price</td>
                        </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>QF 171</td>
                           <td>Qantas Airways</td>
                           <td>13:15</td>
                           <td>23:10</td>
                           <td>7 hrs</td>
                           <td>1</td>
                           <td>1,400</td>
                       </tr>
                       <tr>
                           <td>AK 171</td>
                           <td>Emirates</td>
                           <td>3:30</td>
                           <td>23:10</td>
                           <td>22 hrs</td>
                           <td>2</td>
                           <td>2,300</td>
                       </tr>
                   </tbody>
                </table>            
            </div>
        );
    }
}

SearchResultOne.prototypes = {
    todos: propTypes.object,
    dispatchSearchFlight: propTypes.func
}

export const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, {
    dispatchSearchFlight: fieldLoad
})(SearchResultOne);