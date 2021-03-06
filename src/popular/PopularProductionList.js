import React, {Component} from 'react';
import ProductionDisplay from './ProductionDisplay';

// Show a list of popular productions
class PopularProductionList extends Component {
    constructor() {
        super();
    }

    render() {
        // Map each item of data to a display item for a production
        const items = this.props.popularProductions.map((productionItemData) => {
            if (productionItemData.programmeTitle.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
                return;
            }
            return (<ProductionDisplay productionData = {productionItemData} key = {productionItemData.productionId} />)
        });

        return (
            <table>
                <tbody>{items}</tbody>
            </table>
        );
    }
}

export default PopularProductionList;
