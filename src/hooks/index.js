import moment from 'moment';
import Firebase from '../firebase/firebase';
import CollatedTasksExist from '../helpers';
import { useState, useEffect } from 'react';

const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = Firebase
            .firestore()
            .collection('task')
            .where('userId', '==', 'gmJwmwPV26oBxG4rIDKM');

        unsubscribe = 
            selectedProject && !CollatedTasksExist(selectedProject)
                ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
                : selectedProject == 'TODAY'
                ? (unsubscribe = unsubscribe.where(
                    'date',
                    '==',
                    moment().format('DD/MM/YYYY')
                    ))
                : selectedProject === 'INBOX' || selectedProject === 0
                ? (unsubscribe = unsubscribe.where('date', '==', ''))
                : unsubscribe;
    }, [selectedProject]);
};