import { createStore } from 'redux';
import updateUserReducer from './reducers';

const store = createStore(updateUserReducer);

export default store;
