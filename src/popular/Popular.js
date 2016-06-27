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
        loader.loadPopular().then(response => {
            const jsonResponse = JSON.parse(response);
            console.log("XXXX success in caller: " + JSON.stringify(jsonResponse));
        }).catch(e => {
            console.error("Error: " + e);
        });
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
