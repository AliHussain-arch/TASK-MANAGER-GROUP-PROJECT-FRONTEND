import { useEffect, useState } from 'react';
import TaskItem from '../taskItem/taskItem';
import TaskForm from '../taskForm/taskForm';
import taskService from '../../../services/taskService';
import { useParams } from 'react-router-dom';

export default function TaskList({ userId }) {
  const [taskList, setTaskList] = useState([]);
  const { projectId } = useParams();

  const fetchTaskList = async () => {
    try {
      const taskData = await taskService.listTasks(userId, projectId);
      setTaskList(taskData.tasks || []);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTaskList();
  }, [userId, projectId]);

  return (
    <>
      <TaskForm userId={userId} projectId={projectId} fetchTaskList={fetchTaskList} />
      <h1>Tasks</h1>
      <div>
        <ul>
          {taskList.length === 0 ? (
            <li>No tasks available</li>
          ) : (
            taskList.map(task => (
              <TaskItem key={task._id} task={task} fetchTaskList={fetchTaskList}/>
            ))
          )}
        </ul>
      </div>
    </>
  );
}