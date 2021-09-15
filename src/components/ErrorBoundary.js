import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

export class ErrorBoundary extends Component {
    render() {
        const { todos: { error } } = this.props;
        return (
            <div class="error">
            {error}
            </div>
        );
    }
}

ErrorBoundary.prototypes = {
}

export const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps,
    {})(ErrorBoundary);