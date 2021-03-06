import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Users from './Users';
import Form from './Form';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
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

   this.handleClick = this.handleClick.bind(this);
   this.handleDelete = this.handleDelete.bind(this);
}


handleDelete(id) {
  console.log('Deleteing user', id + 1);
  let users = this.state.users;
  users.splice(id, 1);
  console.log('Deleted', users); 
  this.setState(prevState => ({users}));

}

handleClick(formValues) {
  console.log('input =>', formValues);
  
const { firstname, lastname, birthday, age, hobby } = formValues;

let usersInState = this.state.users;
let userExist = usersInState.filter(user => user['firstname'] === formValues['firstname'] && user.lastname === formValues.lastname);

if (userExist.length) {
   error = 'User exists already';
   this.setState({errorMessage : error});
    
  return false;
}
console.log('user exist', userExist, usersInState);
console.log(Object.values(formValues));
let error = '';
for (let item in formValues) {
    if (formValues[item] === '') {
      console.log('item', item, formValues[item], 'Age awaiting!');
      error = `${item} not supplied!`;
      this.setState({errorMessage : error});
    
      return false;
    }

  if (item === 'age') {
    if (isNaN(formValues[item])) {
       console.log('Age must be a number!');
        error = 'Age must be a number';
        this.setState({errorMessage : error});
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
  this.setState({errorMessage : ''});
  console.log('submitted', newState);
} 

  render() {
    const { name, users } = this.state;
    return (
      <div  className='text-underlined'>
        <Hello name={name} />
        {this.state.errorMessage ? <span className='error'>{this.state.errorMessage} </span> : <span></span>}
        <Form onClick={this.handleClick}/>
        <Users users={users} onDelete={this.handleDelete}/>
        <p style={{color: '#333'}}>
        NB: Click on a user to delete!
        </p>
        <p>
          .... Development in progress...!!!
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
