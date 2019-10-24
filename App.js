import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import store from './redux/store';
import Hello from './Hello';
import Users from './Users';
import Form from './Form';
import './style.css';


const App = (props) => {

// const users = useSelector(state => )
const users = store.getState();

const handleDelete = (id) => {
  console.log('Deleteing user', id + 1);
  let users = this.state.users;
  users.splice(id, 1);
  console.log('Deleted', users); 
  this.setState(prevState => ({users}));

}

const handleClick = (formValues) => {
  console.log('input =>', formValues);
  
const { firstname, lastname, birthday, age, hobby } = formValues;

let usersInState = this.state.users;
let userExist = usersInState.filter(user => user['firstname'] === formValues['firstname'] && user.lastname === formValues.lastname);

if (userExist.length) {
   error = 'User exists already';
  //  this.setState({errorMessage : error});
    
  return false;
}
console.log('user exist', userExist, usersInState);
console.log(Object.values(formValues));
let error = '';
for (let item in formValues) {
    if (formValues[item] === '') {
      console.log('item', item, formValues[item], 'Age awaiting!');
      error = `${item} not supplied!`;
      // this.setState({errorMessage : error});
    
      return false;
    }

  if (item === 'age') {
    if (isNaN(formValues[item])) {
       console.log('Age must be a number!');
        error = 'Age must be a number';
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
  let newState = [...this.state.users, newUser];
  this.setState(prevState => ({users: newState}));
  // this.setState({errorMessage : ''});
  console.log('submitted', newState);
} 

 
    return (
      <div  className='text-underlined'>
        <Hello name={name} />
        // {this.state.errorMessage ? <span className='error'>{this.state.errorMessage} </span> : <span></span>}
        <Form onClick={this.handleClick}/>
        <Users users={users} onDelete={this.handleDelete}/>
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