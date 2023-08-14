import { memo } from 'react';
import { IToDo } from '../../types';
import { Grid, IconButton, TableCell, TableRow } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import store from '../../store';
import { removeTodo } from '../../store/reducers/todoSlice';
import { useState } from 'react';
import { ToDoInput } from './ToDoInput';

export const ToDoItem = memo((props: IToDo) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch<typeof store.dispatch>();

  const toggleEditing = () => {
    setIsEditing((state) => !state);
  };
  const onRemoveHandler = () => {
    dispatch(removeTodo(props));
  };
  const onSaveDescription = () => {
    setIsEditing(false);
  };

  return (
    <TableRow className={'row'}>
      <TableCell>{props.id}</TableCell>
      <TableCell className={'description'}>
        {isEditing ? (
          <ToDoInput
            isUpdateAction={true}
            todo={props}
            onSave={onSaveDescription}
          />
        ) : (
          props.description
        )}
      </TableCell>
      <TableCell>
        <Grid container spacing={1} wrap={'nowrap'}>
          <Grid item>
            <IconButton onClick={toggleEditing} size={'small'} color={'info'}>
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={onRemoveHandler}
              size={'small'}
              color={'error'}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
});
