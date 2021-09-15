import React, { Component} from 'react';
import propTypes from 'prop-types';
import {connect } from 'react-redux';
import { fieldLoad } from '../actions';

export class SubmitButton extends Component {
    render(){
        const {dispatchSearchFlight} = this.props;
        return (
            <div class="submitContainer">               
               <button class="submitBtn"            
                    onClick={() => dispatchSearchFlight('loadResponse', true)}>Search Flight</button>               
            </div>
        );
    }
}

SubmitButton.prototypes = {
    todos: propTypes.object,
    dispatchSearchFlight: propTypes.func
}

export const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, {
    dispatchSearchFlight: fieldLoad
})(SubmitButton);