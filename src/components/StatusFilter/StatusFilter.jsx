import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { statusFilters } from 'redux/constans';
import { getStatusFilter } from 'redux/selectors';

import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleChangeFilter = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleChangeFilter(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleChangeFilter(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleChangeFilter(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
