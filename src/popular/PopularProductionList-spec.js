import PopularProductionList from './PopularProductionList';
import ProductionDisplay from './ProductionDisplay';
import React, {Component} from 'react';
import ReactTestUtils from "react-addons-test-utils";
import mockProductions from './mockProductions.json';

describe('PopularProductionList', () => {
    it('should render one production display for each data item with no filtering', () => {
        const list = createProductionsList(mockProductions.productions, "");
        const renderedComponent = ReactTestUtils.renderIntoDocument(list);
        const foundComponents = ReactTestUtils.scryRenderedComponentsWithType(renderedComponent, ProductionDisplay);
        expect(foundComponents.length).toEqual(mockProductions.productions.length);
    });

    it('should render one item for an exact filter', () => {
        const list = createProductionsList(mockProductions.productions, "Coronation Street");
        const renderedComponent = ReactTestUtils.renderIntoDocument(list);
        const foundComponents = ReactTestUtils.scryRenderedComponentsWithType(renderedComponent, ProductionDisplay);
        expect(foundComponents.length).toEqual(1);
    });

    it('should render one item for an exact filter, ignoring case', () => {
        const list = createProductionsList(mockProductions.productions, "CORONATION STREET");
        const renderedComponent = ReactTestUtils.renderIntoDocument(list);
        const foundComponents = ReactTestUtils.scryRenderedComponentsWithType(renderedComponent, ProductionDisplay);
        expect(foundComponents.length).toEqual(1);
    });

    it('should render no items if nothing matches the filter', () => {
        const list = createProductionsList(mockProductions.productions, "Game of Thrones");
        const renderedComponent = ReactTestUtils.renderIntoDocument(list);
        const foundComponents = ReactTestUtils.scryRenderedComponentsWithType(renderedComponent, ProductionDisplay);
        expect(foundComponents.length).toEqual(0);
    });

    it('should render correct number of items for one letter filter string', () => {
        const list = createProductionsList(mockProductions.productions, "c");
        const renderedComponent = ReactTestUtils.renderIntoDocument(list);
        const foundComponents = ReactTestUtils.scryRenderedComponentsWithType(renderedComponent, ProductionDisplay);
        expect(foundComponents.length).toEqual(6);
    });
});

function createProductionsList(productions, filterText) {
    return (<PopularProductionList popularProductions = {productions} filterText = {filterText} />);
}
