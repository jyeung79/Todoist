import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import { useTasks } from '../hooks';

const TasksLayout = styled('div')`
`;

const TasksList = styled('ul')`
`;

const Tasks = () => {
    const { tasks } = useTasks("1");

    console.log(tasks);
    let projectName = '';

    return (
        <TasksLayout data-testid='tasks'>
            <h2 data-testid='project-name'>{projectName}</h2>
            
            <TasksList>
            {tasks.map((task) => (
                <li key={`${task.id}`}>
                    <Checkbox id={task.id} />
                    <span>{task.task}</span>
                </li>
            ))}
            </TasksList>
        </TasksLayout>
    );
};

export default Tasks;