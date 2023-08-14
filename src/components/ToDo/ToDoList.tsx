import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ToDoListFilled } from './ToDoListFilled';
import { ToDoListEmpty } from './ToDoListEmpty';

export const ToDoList = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className={'container'}>
      {todos.length ? <ToDoListFilled /> : <ToDoListEmpty />}
    </div>
  );
};
