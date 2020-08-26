import moment from 'moment';
import Firebase from '../firebase/firebase';
import 'firebase/firestore';
import collatedTasksExist from '../helpers';
import { useState, useEffect } from 'react';

const useTasks = (selectedProject) => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = Firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', 'gmJwmwPV26oBxG4rIDKM');

        unsubscribe = 
            selectedProject && !collatedTasksExist(selectedProject)
                ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
                : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where(
                    'date',
                    '==',
                    moment().format('DD/MM/YYYY')
                    ))
                : selectedProject === 'INBOX' || selectedProject === 0
                ? (unsubscribe = unsubscribe.where('date', '==', ''))
                : unsubscribe;
 
        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(tasks => ({
                id: tasks.id,
                ...tasks.data(),
            }));
            
            setTasks(
                selectedProject === 'NEXT_7'
                ? newTasks.filter(
                    task =>
                    moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                    task.archived !== true
                    )
                    : newTasks.filter(task => task.archived !== true)
            );

            setArchivedTasks(newTasks.filter(task => task.archived !== false));
        });

        return () => unsubscribe();
    }, [selectedProject]);

    return { tasks, archivedTasks };
};

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Firebase
            .firestore()
            .collection('projects')
            .where('userId', '===', 'gmJwmwPV26oBxG4rIDKM')
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map((project) => ({
                    ...project.data(),
                    docId: project.id,
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return { projects, setProjects };
}

export { useTasks, useProjects };