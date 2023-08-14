import { Container } from '@mui/material';
import { ToDoList } from './ToDoList';
import './ToDo.scss';
import { useDispatch } from 'react-redux';
import store from '../../store';
import { useEffect } from 'react';
import { loadDummyTodos } from '../../store/reducers/todoSlice';
import { ToDoInput } from './ToDoInput';

export const ToDo = () => {
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(loadDummyTodos());
  }, []);

  return (
    <Container fixed>
      <div className={'ToDo'}>
        <ToDoInput />
        <ToDoList />
      </div>
    </Container>
  );
};
