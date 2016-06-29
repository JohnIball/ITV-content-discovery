import React, {Component} from 'react';

class ProductionDisplay extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <tr>
                <td>
                    <img src = {this.props.productionData._links.image.href} width="256" />
                </td>
                <td>
                    {this.props.productionData.programmeTitle}
                </td>
            </tr>
        );
    }
}

export default ProductionDisplay;
