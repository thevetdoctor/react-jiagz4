import userActions from './actions';

const initialState = JSON.parse(localStorage.getItem('usersDB')) || {
    name: 'React Challenge by Enye!',
    errorMessage: '',
    formView: true, 
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
    const { newUser } = actions;
    let newUserList = [ ...state.users ];
    newUserList.push(newUser);
    let newState = Object.assign({}, state, {
      ...state, users: newUserList,
      });
    console.log('new user added', newUser);
    localStorage.setItem('usersDB', JSON.stringify(newState));

  return newState;

  case userActions.deleteUser.type:
    const { id }= actions;
    console.log('Deleting user', id + 1);
    let newUserList = [ ...state.users ];
    newUserList.splice(id, 1);
    let newState = Object.assign({}, state, {
      ...state, users: newUserList,
      });
    console.log('newState: ', newState);
    localStorage.setItem('usersDB', JSON.stringify(newState));

  return newState;

   case userActions.logError.type:
    const { error } = actions;
    console.log('error-message: ', error);
    let newState = Object.assign({}, state, {
      ...state, errorMessage: error,
    });
    localStorage.setItem('usersDB', JSON.stringify(newState));

  return newState;


  case userActions.formView.type:
    console.log(`switching ${!state.formView ? 'ON' : 'OFF'} the form`);
    let newState = Object.assign({}, state, {
      ...state, formView: !state.formView, errorMessage: ''
    });
    localStorage.setItem('usersDB', JSON.stringify(newState));
  return newState;
 

  case userActions.dataSuccess.type:
    console.log('Getting DATA from API');
    let { data } = actions;
    let newState = Object.assign({}, state, {
      ...state, apiData: [...data]
    });
    localStorage.setItem('usersDB', JSON.stringify(newState));
    console.log('API response', JSON.parse(localStorage.getItem('usersDB')).apiData);
  return newState;


  case userActions.dataFailure.type:
    let { error } = actions;
    console.log('Error response from API', error);
    let newState = Object.assign({}, state, {
      ...state, apiError: error
    });
    localStorage.setItem('usersDB', JSON.stringify(newState));
  return newState;


  default:
    localStorage.setItem('usersDB', JSON.stringify(state));
 
  return state;
  }
};

export default updateUserReducer;