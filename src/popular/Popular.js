import React, {Component} from 'react';
import PopularProductionList from './PopularProductionList';
import Filter from './Filter';
import Loader from '~/src/loader/Loader.js';

// Top level component to show popular programmes
class Popular extends Component {

    constructor() {
        super();

        this.loadData = this.loadData.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);

        this.state = {
            filterText: "",
            popularResponse: []
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let loader = new Loader();
        loader.loadPopular().then(response => {
            this.setState({
                popularResponse: response
            });
        }).catch(e => {
            console.log("Error in Popular: " + e);
        });
    }

    // Get the user input from the filter box
    handleUserInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        if (!this.state.popularResponse || this.state.popularResponse.length === 0) {
            // Make sure we don't even get the filter box if we have no productions to show
            return null;
        }

        return (
            <div>
                <Filter
                    onUserInputCallback = {this.handleUserInput}  // Send a callback in the props
                    filterText = {this.state.filterText}
                />
                <PopularProductionList
                    popularProductions = {this.state.popularResponse}
                    filterText = {this.state.filterText}
                />
            </div>
        );
    }
}

export default Popular;
