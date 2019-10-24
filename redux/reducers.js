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
        hobby: 'reading'},       ]
};

const updateUserReducer = (state = initialState, userActions) => {
  switch(userActions.type) {
  case 'ADD_USER':
  return {
    users: state.users,
  }

  default:
  return state;
  }
};

export default updateUserReducer;