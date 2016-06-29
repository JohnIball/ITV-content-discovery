import React, {Component} from 'react'

// Show a list of popular productions
class PopularProductionList extends Component {
    constructor() {
        super();

    }

    render() {
	    console.log("XXXX popularProductions = " + JSON.stringify(this.props.popularProductions));
        return (
            <div>
                Popular
            </div>
        );
    }
}

export default PopularProductionList;
