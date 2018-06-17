import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ShareRegion from '../share_region';

describe('Share Region Component', () => {
    let component;

    beforeEach(() => {
      component = shallow(<ShareRegion/>);
    });

    it('should render without throwing an error', () => {
        expect(component.find('#share-region').exists()).toBe(true)
    })

    it('renders 5 social media links', () => {
        expect(component.find('.share-link').length).toEqual(5)
    })

});