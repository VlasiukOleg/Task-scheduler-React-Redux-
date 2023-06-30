import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { TaskBar } from 'components/TaskBar/TaskBar';

import { Helmet } from 'react-helmet';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { getError, getIsLoading, getTasks } from 'redux/tasks/selectors';

export default function Tasks() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const tasks = useSelector(getTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {tasks.length > 0 && <TaskList />}
    </>
  );
}
