import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { GroupList } from '../group_list';

describe('Group List Component', () => {
    let component;
    const mock_fetchGroups_fn = jest.fn();
    const mock_fecthTeams_fn = jest.fn();
    const mock_fetchTeamResults_fn = jest.fn();

    beforeEach(() => {
        mock_fetchGroups_fn.mockReset();
        mock_fecthTeams_fn.mockReset();
        mock_fetchTeamResults_fn.mockReset();
        
        component = shallow(<GroupList 
                                    fetchGroups={mock_fetchGroups_fn}
                                    fetchTeams={mock_fecthTeams_fn}
                                    fetchTeamResults={mock_fetchTeamResults_fn} />);
    });

    it('should render without throwing an error', () => {
        expect(component.find('#group-list').exists()).toBe(true)
    })

    it('should call the mock fetch groups function 1 time', () => {
        expect(mock_fetchGroups_fn.mock.calls.length).toBe(1)
    })

});