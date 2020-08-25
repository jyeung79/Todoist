import collatedTasks from '../constants';

const CollatedTasksExist = (selectedProject) => {
    collatedTasks.find(task => task.key === selectedProject);
};

export default CollatedTasksExist;