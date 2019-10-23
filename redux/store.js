import { createStore } from 'redux';
import updateUserReducer from './reducers';

export const store = createStore(updateUserReducer);