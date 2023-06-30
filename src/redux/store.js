import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer } from './tasks/tasksSlice';
import { filtersReducer } from './tasks/filtersSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    tasks: tasksReducer,
    auth: authReducer,
  },
});
