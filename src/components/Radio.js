import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fieldLoad } from '../actions';

export class Radio extends Component {
    render() {
        const { dispatchSetSourceSelected } = this.props;
        return (
            <div class="TripContainer">
                &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="trip" value="One Way" name="gender" onChange={(value) => dispatchSetSourceSelected('trip', this)}/> One Way &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value="Return" name="gender" id="trip" onChange={(value) => dispatchSetSourceSelected('trip', this)}/> Return
            </div>
        );
    }
}

Radio.prototypes = {   
    dispatchSetSourceSelected: propTypes.func
}

export const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps,
    { dispatchSetSourceSelected: fieldLoad })(Radio);