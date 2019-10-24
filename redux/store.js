import { createStore } from 'redux';
import updateUserReducer from './reducers';

const store = createStore(updateUserReducer);

store.dispatch({
  type: 'DELETE_USER',
  id: 1
})

console.log(store.getState())

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