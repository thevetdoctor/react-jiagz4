import React from 'react';
import { useSelector } from 'react-redux';
import store from './redux/store';
import Hello from './Hello';
import Users from './Users';
import Form from './Form';
import './style.css';



const App = () => {

const state = store.getState();
// store.subscribe(() => {console.log('current state is : ', state)});
console.log(state);
const name = useSelector(state => state.name);
const errorMessage = useSelector(state => state.errorMessage);
const users = useSelector(state => state.users);
// console.log('my users', users);

const handleDelete = (id) => {
  console.log('Deleting user', id + 1);

  store.dispatch({
  type: 'DELETE_USER',
  id,
});

}

const handleClick = (formValues) => {
  console.log('input =>', formValues);
  
const { firstname, lastname, birthday, age, hobby } = formValues;

let usersInState = [ ...users ];
let userExist = usersInState.filter(user => user['firstname'] === formValues['firstname'] && user.lastname === formValues.lastname);

if (userExist.length) {
   error = 'User exists already';
  //  this.setState({errorMessage : error});
  
      store.dispatch({
        type: 'LOG_ERROR',
        error,
      });
  return false;
}
console.log('user exist', userExist, usersInState);
console.log(Object.values(formValues));
let error = '';
for (let item in formValues) {
    if (formValues[item] === '') {
      console.log('item', item, formValues[item], 'Age awaiting!');
      error = `${item} not supplied!`;

      store.dispatch({
        type: 'LOG_ERROR',
        error,
      });
      // this.setState({errorMessage : error});
    
      return false;
    }

  if (item === 'age') {
    if (isNaN(formValues[item])) {
       console.log('Age must be a number!');
        error = 'Age must be a number';

        store.dispatch({
        type: 'LOG_ERROR',
        error,
      });
        // this.setState({errorMessage : error});
    return;
    }
  }
} 
  let  newUser = {firstname,
        lastname,
        birthday,
        age,
        hobby};
  let newState = [...state.users, newUser];

  error = '';
  store.dispatch({
        type: 'LOG_ERROR',
        error,
      });
  // this.setState(prevState => ({users: newState}));
  // this.setState({errorMessage : ''});
   store.dispatch({
      type: 'ADD_USER',
      newUser,
   });

  console.log('submitted', 'newUser =>', newUser, 'newState =>', newState);
} 

 
    return (
      <div  className='text-underlined'>
        <Hello name={name} />
        {errorMessage ? <span className='error'>{errorMessage} </span> : <span></span>}
        <Form onClick={handleClick}/>
        <Users users={users} onDelete={handleDelete}/>
        <p style={{color: '#333'}}>
        NB: Click (X) to delete a user from the record!
        </p>
        <p>
          .... Development in progress...!!!
        </p>
      </div>
    );
  }

export default App;