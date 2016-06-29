import React, {Component} from 'react';

class ProductionDisplay extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <td>
                {this.props.productionData.programmeTitle}
            </td>
        );
    }
}

export default ProductionDisplay;
