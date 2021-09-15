import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fieldLoad } from '../actions';
import options from './SourceData';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { SOURCE } from '../constants';

export class SourceComponent extends Component {
    render() {
        const { dispatchSetSourceSelected, todos: { sourceSelected } } = this.props;
        return (
            <div class="SourceContainer">From
                <Typeahead
                    id="source"
                    onChange={(value) => dispatchSetSourceSelected(SOURCE, value)}
                    options={options}
                    placeholder="Select a city"
                    selected={sourceSelected}
                />
            </div>
        );
    }
}

SourceComponent.prototypes = {   
    dispatchSetSourceSelected: propTypes.func
}

export const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps,
    { dispatchSetSourceSelected: fieldLoad })(SourceComponent);