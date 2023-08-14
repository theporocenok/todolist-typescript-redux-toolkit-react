import { ChangeEvent, KeyboardEvent } from 'react';
import { TextField } from '@mui/material';
import './ToDo.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store';
import { addTodo, updateTodo } from '../../store/reducers/todoSlice';
import { IToDo } from '../../types';

interface IProps {
  isUpdateAction?: boolean;
  todo?: IToDo;
  onSave?: () => void;
}
export const ToDoInput = (props: IProps) => {
  const { isUpdateAction, todo, onSave } = props;
  const [description, setDescription] = useState(todo?.description);
  const [error, setError] = useState(false);
  const dispatch = useDispatch<typeof store.dispatch>();

  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    if (!description.length) {
      setError(true);

      return;
    }
    if (isUpdateAction) {
      dispatch(updateTodo({ ...todo, description }));
    } else {
      dispatch(addTodo(description));
    }

    setError(false);
    setDescription('');
    onSave?.();
  };
  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setDescription(event.target.value);
    setError(false);
  };

  return (
    <TextField
      label={'Введите описание задачи'}
      variant={'filled'}
      size={'small'}
      fullWidth
      value={description}
      onChange={onChangeHandler}
      error={error}
      onKeyDown={onKeyDownHandler}
    />
  );
};
