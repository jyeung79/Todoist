import React from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'

const SidebarSection = styled('div')`

`;

const SidebarList = styled('ul')`

`; 

const SidebarMiddle = styled('div')`
`;

const SidebarProjects = styled('ul')`
`;


const Sidebar = () => {
    return (
        <SidebarSection data-testid="sidebar">
            <SidebarList>
                <li>
                    <span><FaInbox /></span>
                    <span>Inbox</span>
                </li>
                <li>
                    <span><FaRegCalendar /></span>
                    <span>Today</span>
                </li>
                <li>
                    <span><FaRegCalendarAlt /></span>
                    <span>Next 7 days</span>
                </li>
            </SidebarList>

            <SidebarMiddle>
                <span><FaChevronDown /></span>
                <h2>Projects</h2>
            </SidebarMiddle>

            <SidebarProjects>
                Projects will be be here!
            </SidebarProjects>
            Add Project Component Here!
        </SidebarSection>
    )
}

export default Sidebar;