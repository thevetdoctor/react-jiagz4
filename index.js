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
}

handleClick(e) {
  console.log('input =>', e);
  // let  newUser = {firstname: 'Toke',
  //       lastname: 'Ode',
  //       birthday: '2019-09-16',
  //       age: 34,
  //       hobby: 'reading'};
const { firstname, lastname, birthday, age, hobby } = e;
if (birthday === '') {
    alert('Birthday not supplied!');
    return false;
  }
  let  newUser = {firstname,
        lastname,
        birthday,
        age,
        hobby};
  let newState = [...this.state.users, newUser];
  // this.setState(prevState => {
  //   this.state.users = newState;
  // console.log('clicked', this.state);
  // });
  this.setState(prevState => ({users: newState}));
  console.log('submitted', newState);
}

// componentDidMount() {
//   this.handleClick();
// }

// componentDidUpdate(){
//   (prevState) => (
//   // if (this.state.users !== prevState.users) {
//     this.setState({users: this.state.users}))
//   };
 


  render() {
    const { name, users } = this.state;
    return (
      <div  className='text-underlined'>
        <Hello name={name} />
        <Form val={} onClick={this.handleClick}/>
        <Users users={users}/>
        <p>
          .... Development in progress...!!!
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
