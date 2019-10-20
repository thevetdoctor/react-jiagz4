import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, DatePicker } from 'antd';
// import Calendar from './Calendar';
import moment from 'moment';
import 'antd/dist/antd.css';

class Form extends Component {
  constructor(props) {
    super(props);
  
   this.state = {
    firstname: '',
    lastname: '',
    birthday: '', 
    age: '',
    hobby: '',
  }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit (e) {
e.preventDefault();
console.log(e.target.childNodes[0].childNodes[4].childNodes[0].value);
let birthDate = e.target.childNodes[0].childNodes[4].childNodes[0].value;
  if (birthDate) {
  this.setState(prev => ({birthday: birthDate}));
  }
  console.log(this.state);
  }

handleChange({target}) {
  let name = target.name;
  let val = target.value;
  this.setState(prev => ({[name]: ''}));
  console.log(name, val);
  if (val === '' || val.trim() === '') {
    target.classList.add('empty');
    console.log(`${name} is not supplied`);
    return;
  }
  if (name === 'age') {
    if (isNaN(val)) {
       target.classList.add('empty');
      //  alert('Age must be a number');
       console.log(`${name} should be a number!`);
    return;
    }
  }
 let birthDate = target.parentNode.childNodes[4].childNodes[0].childNodes[0].value;
  if (birthDate) {
  this.setState(prev => ({birthday: birthDate}));
  } else {
  this.setState(prev => ({birthday: ''}));
  }
  
  console.log('input =>', birthDate, val);
  this.setState(prev => ({[name]: val}));
  console.log(this.state);
}

  render() {
    return (
      <div>
        <form className='form-selector' onSubmit={this.handleSubmit}>
        <div>
          <input type='text' name='firstname' placeholder='Firstname' onChange={this.handleChange}/><br />
          <input type='text' name='lastname' placeholder='Lastname'  onChange={this.handleChange} /><br />
          <DatePicker /><br />
        
          <input type='text' name='age' placeholder='Age' onChange={this.handleChange} /><br />
          <input type='text' name='hobby' placeholder='Hobby' onChange={this.handleChange} /><br />
          <input type='submit' name='submit' value='Submit' onClick={() => this.props.onClick(this.state)} />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;