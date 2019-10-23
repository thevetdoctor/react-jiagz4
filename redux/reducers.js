import userActions from './actions';

export const updateUserReducer = (state, userActions) => {
  switch(userActions.type) {
  case 'addUser':
  return {
    users: state.users,
  }

  default:
  return state;
  }
};