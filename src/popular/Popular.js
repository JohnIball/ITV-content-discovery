import React, {Component} from 'react'
import Loader from '~/src/loader/Loader.js';

// Top level component to show popular programmes
class Popular extends Component {

    constructor() {
        super();
        this.loadData = this.loadData.bind(this);

        this.loadData();
    }

    loadData() {
        let loader = new Loader();
        loader.loadPopular();
    }

    render() {
        return (
            <div>
                Popular
            </div>
        );
    }
}

export default Popular;
