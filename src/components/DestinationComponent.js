import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fieldLoad } from '../actions';
import options from './SourceData';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { DEST } from '../constants';

export class DestinationComponent extends Component {
    render() {
        const { dispatchSetSourceSelected, todos: { destSelected } } = this.props;
        return (
            <div class="DestContainer">To
             <Typeahead
                id="dest"
                onChange={(value) => dispatchSetSourceSelected(DEST, value)}
                options={options}
                placeholder="Select a city"
                selected={destSelected}
                />
            </div>
        );
    }
}

DestinationComponent.prototypes = {   
    dispatchSetSourceSelected: propTypes.func
}

export const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps,
    { dispatchSetSourceSelected: fieldLoad })(DestinationComponent);