import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { GroupList } from '../group_list';

describe('Group List Component', () => {
    let component;
    const mock_fetchGroups_fn = jest.fn();
    const mock_fetchTeams_fn = jest.fn();
    const mock_fetchTeamResults_fn = jest.fn();

    beforeEach(() => {
        component = shallow(<GroupList 
                                    fetchGroups={mock_fetchGroups_fn}
                                    fetchTeams={mock_fetchTeams_fn}
                                    fetchTeamResults={mock_fetchTeamResults_fn} />);
    });

    afterEach(() => {
        mock_fetchGroups_fn.mockReset();
        mock_fetchTeams_fn.mockReset();
        mock_fetchTeamResults_fn.mockReset();
    });

    it('should render initially group-list-empty', () => {
        expect(component.find('#group-list-empty').exists()).toBe(true)
    })

    it('should not render initially group-list-empty', () => {
        expect(component.find('#group-list').exists()).toBe(false)
    })

    it('should render group-list after props are set', () => {
        component.setProps({groups: [], teams: [], teamResults: []}) ;
        expect(component.find('#group-list').exists()).toBe(true)
    })

    it('should not render group-list-empy after props are set', () => {
        component.setProps({groups: [], teams: [], teamResults: []}) ;
        expect(component.find('#group-list-empty').exists()).toBe(false)
    })

    it('should call the mock fetch groups function 1 time', () => {
        expect(mock_fetchGroups_fn.mock.calls.length).toBe(1)
    })

    it('should call the mock fetch teams function 1 time', () => {
        expect(mock_fetchTeams_fn.mock.calls.length).toBe(1)
    })

    it('should call the mock fetch team results function 1 time', () => {
        expect(mock_fetchTeamResults_fn.mock.calls.length).toBe(1)
    })

});