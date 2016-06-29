import React, {Component} from 'react';
import PopularProductionList from './PopularProductionList';
import Loader from '~/src/loader/Loader.js';

// Top level component to show popular programmes
class Popular extends Component {

    constructor() {
        super();

        this.state = {
            popularResponse: {}
        };

        this.loadData = this.loadData.bind(this);
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

    render() {
        // Check validity of data. Not sure if this is the right place to do this.
        // Also can we strip _embedded out in the loader in all cases?
        if (!this.state.popularResponse._embedded || !this.state.popularResponse._embedded.productions) {
            return null;
        }

        return (
            <div>
                <PopularProductionList popularProductions = {this.state.popularResponse._embedded.productions} />
            </div>
        );
    }
}

export default Popular;
