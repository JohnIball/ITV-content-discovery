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
            popularResponse: {}
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let loader = new Loader();
        loader.loadPopular().then(response => {
            this.setState({
                popularResponse: JSON.parse(response)
            });
        }).catch(e => {
            console.log("Error: " + e);
        });
    }

    // Get the user input from the filter box
    handleUserInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        // Check validity of data. Not sure if this is the right place to do this.
        // Also can we strip _embedded out in the loader in all cases?
        if (!this.state.popularResponse._embedded || !this.state.popularResponse._embedded.productions) {
            return null;
        }

        return (
            <div>
                <Filter
                    onUserInputCallback = {this.handleUserInput}  // Send a callback in the props
                    filterText = {this.state.filterText}
                />
                <PopularProductionList
                    popularProductions = {this.state.popularResponse._embedded.productions}
                    filterText = {this.state.filterText}
                />
            </div>
        );
    }
}

export default Popular;
