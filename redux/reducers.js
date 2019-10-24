import userActions from './actions';

const initialState = {
    name: 'React Challenge by Enye!',
    errorMessage: '',
    users: [
        {firstname: 'Oba',
        lastname: 'Ode',
        birthday: '2019-09-16',
        age: 34,
        hobby: 'swimming'},
        
        {firstname: 'Dami',
        lastname: 'Ode',
        birthday: '2019-09-16',
        age: 4,
        hobby: 'reading'},
        
        {firstname: 'Demi',
        lastname: 'Ode',
        birthday: '2019-09-16',
        age: 4,
        hobby: 'reading'},

        {firstname: 'Toke',
        lastname: 'Ode',
        birthday: '2019-09-16',
        age: 4,
        hobby: 'reading'},
      ]
};
 
const updateUserReducer = (state = initialState, actions) => {
  switch(actions.type) {
  case userActions.addUser.type:
    const newUser = userActions.addUser.payload;
    let newUserList = state.users;
    newUserList.push(newUser);
    let newState = { ...state, users: newUserList};
  return newState;

  case userActions.deleteUser.type:
    const id = userActions.deleteUser.payload;
    let newUserList = state.users;
    newUserList.splice(id, 1);
    let newState = { ...state, users: newUserList};
  return newState;

  default:
  return state;
  }
};

export default updateUserReducer;