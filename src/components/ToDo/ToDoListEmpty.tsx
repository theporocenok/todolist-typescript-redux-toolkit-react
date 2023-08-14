import { Typography } from '@mui/material';

export const ToDoListEmpty = () => {
  return (
    <Typography variant={'h2'} className={'empty'}>
      {'Список элементов пуст'}
    </Typography>
  );
};
