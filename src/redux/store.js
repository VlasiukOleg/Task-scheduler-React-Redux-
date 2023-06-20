import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducer';

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.

const enhancer = composeWithDevTools();

export const store = createStore(rootReducer, enhancer);
