import React, {Component} from 'react';

// Filter the list of productions
class Filter extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInputCallback(
            this.refs['filterTextInput'].value
        );
    }

    render() {
        return (
            <form>
                <input
                    type = "text"
                    placeholder = "Filter..."
                    value = {this.props.filterText}
                    ref = "filterTextInput"
                    onChange = {this.handleChange}
                />
            </form>
        );
    }
}

export default Filter;