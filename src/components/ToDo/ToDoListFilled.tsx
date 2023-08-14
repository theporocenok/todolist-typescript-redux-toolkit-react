import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ToDoItem } from './ToDoItem';
import { TableBody, TableContainer } from '@mui/material';

export const ToDoListFilled = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      <TableContainer className={'table'}>
        <TableBody className={'body'}>
          {todos.map((todo) => (
            <ToDoItem key={todo.id} {...todo} />
          ))}
        </TableBody>
      </TableContainer>
      {todos.length + ' задач'}
    </>
  );
};
