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

// if (initialState) localStorage.setItem('usersDB', JSON.stringify(initialState));


const updateUserReducer = (state = initialState, actions) => {
  localStorage.setItem('usersDB', JSON.stringify(state));

  switch(actions.type) {
  case userActions.addUser.type:
    const { newUser } = actions;
    let newUserList = [ ...state.users ];
    newUserList.push(newUser);
    let newState = Object.assign({}, state, {
      ...state, users: newUserList,
      });
    console.log('new user added', newUser);
  return newState;

  case userActions.deleteUser.type:
    // const id = userActions.deleteUser.id;
    const { id }= actions;
    // console.log('id', id);
    console.log('Deleting user', id + 1);
    // let clonedState = Object.assign({}, state, {
    //   ...state,
    // });
    // let newUserList = clonedState.users;
    // let newUserList = [{
    //   firstname: 'Adebisi',
    // }];
    let newUserList = [ ...state.users ];
    newUserList.splice(id, 1);
    let newState = Object.assign({}, state, {
      ...state, users: newUserList,
      });
    console.log('newState: ', newState);

  return newState;

   case userActions.logError.type:
    const { error } = actions;
    console.log('error-message: ', error);
    let newError = state.errorMesage;
    // let newState = { ...state, errorMesage: error};
    let newState = Object.assign({}, state, {
      ...state, errorMessage: error,
    });
  return newState;


    case userActions.formView.type:
    // const { formview } = actions;
    console.log(`switching ${!state.formView ? 'ON' : 'OFF'} the form`);
    let newState = Object.assign({}, state, {
      ...state, formView: !state.formView,
    });
  return newState;

  default:
  return state;
  }
};

export default updateUserReducer;