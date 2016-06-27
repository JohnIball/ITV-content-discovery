import React, {Component} from 'react'

// Top level component to show popular programmes
class Popular extends Component {

    constructor() {
        super();
        this.loadData = this.loadData.bind(this);

        this.loadData();
    }

    // XXXX should the component load the data?
    loadData() {

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
