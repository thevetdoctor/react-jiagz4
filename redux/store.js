import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import updateUserReducer from './reducers';

const store = createStore(updateUserReducer, devToolsEnhancer());

export default store;

// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }

// const store = createStore(todos, ['Use Redux'])

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// })

// console.log(store.getState())
// // [ 'Use Redux', 'Read the docs' ]