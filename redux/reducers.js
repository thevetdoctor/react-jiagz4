import userActions from './actions';

const initialState = JSON.parse(localStorage.getItem('usersDB')) || {
    name: 'Oba Userboard!',
    errorMessage: '', 
    formView: true, 
    loading: false,  
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
    let newUserState = Object.assign({}, state, {
      ...state, users: newUserList,
      });
    console.log('new user added', newUser);
    localStorage.setItem('usersDB', JSON.stringify(newUserState));

  return newUserState; 

  case userActions.deleteUser.type:
    const { id }= actions;
    console.log('Deleting user', id + 1);
    let deleteUserList = [ ...state.users ];
    deleteUserList.splice(id, 1);
    let deleteUserState = Object.assign({}, state, {
      ...state, users: deleteUserList,
      });
    console.log('newState: ', newState);
    localStorage.setItem('usersDB', JSON.stringify(deleteUserState));

  return deleteUserState;


 case userActions.deleteUsers.type:
 let deleteUsersState;
    if (state.users.length) {
    console.log('Deleting all users', state.users);
    let deleteUsersList = [ ...state.users ];
    deleteUsersList.splice(0, state.users.length);
    deleteUsersState = Object.assign({}, state, {
      ...state, users: deleteUsersList,
      });
    } else {
      console.log('Deleting all users from API');
    deleteUsersState = Object.assign({}, state, {
      ...state, apiData: [],
      });
    }
    console.log('newState: ', newState);
    localStorage.setItem('usersDB', JSON.stringify(deleteUsersState));

  return deleteUsersState;


  case userActions.logError.type:
    const { logError } = actions; 
    console.log('error-message: ', error);
    let errorState = Object.assign({}, state, {
      ...state, errorMessage: logError,
    });
    localStorage.setItem('usersDB', JSON.stringify(errorState));
  
  return errorState;
  

  case userActions.formView.type:
    console.log(`switching ${!state.formView ? 'ON' : 'OFF'} the form`);
    let formViewState = Object.assign({}, state, {
      ...state, formView: !state.formView, errorMessage: ''
    });
    localStorage.setItem('usersDB', JSON.stringify(formViewState));
  return formViewState;


  case userActions.loading.type:
    console.log(`${!state.loading ? '' : 'NOT'} loading`);
    let loadingState = Object.assign({}, state, {
      ...state, loading: !state.loading
    });
    localStorage.setItem('usersDB', JSON.stringify(loadingState));
  return loadingState;
  

  case userActions.dataSuccess.type:
    console.log('Getting DATA from API');
    let { data } = actions;

    console.log(data);
    if (Object.keys(data[0]).indexOf('username') >= 0) {
      data = data.map(x => ({
        firstname: x.name,
        lastname: x.username,
        birthday: '1980-01-01',
        age: 25,
        hobby: 'travelling'
      }));
    } 
    console.log(data);

    let dataSuccessState = Object.assign({}, state, {
      ...state, apiData: [...data], loading: false
    });
    localStorage.setItem('usersDB', JSON.stringify(dataSuccessState));
    console.log('API response', JSON.parse(localStorage.getItem('usersDB')).apiData);
  return dataSuccessState; 


  case userActions.dataFailure.type:
    let { error } = actions;
    console.log('Error response from API', error);
    let dataFailureState = Object.assign({}, state, {
      ...state, loading: false, apiData: [{
        firstname: 'Demi', 
        lastname: 'Ode', 
        birthday: '2019-09-16',
        age: 4, 
        hobby: 'reading'}]
    });
    localStorage.setItem('usersDB', JSON.stringify(dataFailureState));
  return dataFailureState;


  default:
    localStorage.setItem('usersDB', JSON.stringify(state));
 
  return state;
  }
};

export default updateUserReducer;