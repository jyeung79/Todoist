import React from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa'
import BaseStyles from '../../styles/styles';

const SidebarLayout = styled('div')`
    ${BaseStyles.no_select}
    width: 266px;
    height: calc(100vh);
    padding-top: 74px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: hidden;
    border-right: ${BaseStyles.generic_border};
    background-color: #fafafa;

    li {
        :hover .sidebar .project-delete {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
    }
`;

const SidebarList = styled('ul')`
    li {
        list-style-type: none;
        color: #333;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        cursor: pointer;
        line-height: 1.50;
        font-size: 15px;
        padding-left: 0;
        padding-right: 0;

        div:nth-child(1) {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 10px 0 10px 10px;
            width: 100%;

                span:first-of-type {
                    margin-right: 10px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                        -ms-flex-align: center;
                            align-items: center;

                        svg {
                        width: 18px;
                        height: 18px;
                        color: #555;
                        }
                }
        }
        
        .active, :hover {
            font-weight: bold;
            background-color: white;
        }
    }
`;

const SidebarMiddle = styled('div')`
`;

const SidebarProjects = styled('ul')`
    padding-left: 3px;
`;


const Sidebar = () => {
    return (
        <SidebarLayout data-testid="sidebar">
            <SidebarList>
                <li data-testid="inbox">
                    <span><FaInbox /></span>
                    <span>Inbox</span>
                </li>
                <li data-testid="today">
                    <span><FaRegCalendar /></span>
                    <span>Today</span>
                </li>
                <li data-testid="next7">
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
        </SidebarLayout>
    )
}

export default Sidebar;