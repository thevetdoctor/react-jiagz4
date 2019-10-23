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
  }

handleChange({target}) {
  let name = target.name;
  let val = target.value;
  let keyArray = ['firstname', 'lastname', 'birthday', 'age', 'hobby'];
  if (name === undefined) {
  this.setState(prev => ({birthday: ''}));
  }
  if (keyArray.indexOf(name) >= 0) {
  this.setState(prev => ({[name]: ''}));
  }
  console.log('name & value', 'name =>', name, 'value =>', val);

  if (name === 'undefined' || name === undefined) {
    console.log('name is undefined', 'target =>', target.parentNode, 'val =>', val);
    return;
  }
  if (val === '' || val.trim() === '') {
    target.classList.add('empty');
    console.log(`${name} is not supplied`);
    return;
  }
  if (name === 'age') {
    if (isNaN(val)) {
       target.classList.add('empty');
       console.log(`${name} should be a number!`);
    // return;
    }
  }
  
if (name === '') {
  this.setState(prev => ({birthday: val}));
  return;
}
  this.setState(prev => ({[name]: val}));
}

  render() {
    return (
      <div>
        <form className='form-selector' onSubmit={this.handleSubmit}>
        <div>
          <input type='text' name='firstname' placeholder='Firstname' onChange={this.handleChange}/><br />
          <input type='text' name='lastname' placeholder='Lastname'  onChange={this.handleChange} /><br />

          <div onFocus={this.handleChange}>
          <DatePicker /><br />
          </div>
        
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