import React, {Component} from 'react';

// Display details of a single production
class ProductionDisplay extends Component {
    constructor() {
        super();
    }

    render() {
        // TODO request the correct image size
        return (
            <tr>
                <td>
                    <img src = {this.props.productionData._links.image.href} width="256" />
                </td>
                <td>
                    <table>
                        <tbody>
                            <tr>
                                <td>{this.props.productionData.programmeTitle}</td>
                            </tr>
                            <tr>
                                <td>{this.props.productionData.channel}</td>
                            </tr>
                            <tr>
                                <td>{this.props.productionData.synopsis}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        );
    }
}

export default ProductionDisplay;
