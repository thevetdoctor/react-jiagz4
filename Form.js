import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, DatePicker } from 'antd';
// import Calendar from './Calendar';
import moment from 'moment';
import 'antd/dist/antd.css';

class Form extends Component {
  constructor(props) {
    super(props);
    // function onPanelChange(value, mode) {
    // console.log(value, mode);
  // }
  this.handleChange = this.handleChange.bind(this);
  this.state = {
    firstname: '',
    lastname: '',
    birthday: '', 
    age: '',
    hobby: '',
  }
}

handleChange({target}) {
  let name = target.name;
  let val = target.value;
  this.setState(prev => ({[name]: ''}));
  console.log(name, val);
  if (val === '') {
    console.log(`${name} is not supplied`);
    return;
  }
  if (name === 'age') {
    if (isNaN(val)) {
       console.log(`${name} should be a number!`);
    return;
    }
  }
 let birthDate = target.parentNode.childNodes[4].childNodes[0].childNodes[0].value;
  if (birthDate) {
  this.setState(prev => ({birthday: birthDate}));
  } 
  // else {
  //   alert('Birthday not supplied!');
  //   return false;
  // }
  console.log('input =>', birthDate, val);
  this.setState(prev => ({[name]: val}));
  console.log(this.state);
}

  

  render() {
    return (
      <div>
        <form className='form-selector'>
        <div>
          <input type='text' name='firstname' placeholder='Firstname' onChange={this.handleChange}/><br />
          <input type='text' name='lastname' placeholder='Lastname'  onChange={this.handleChange} /><br />
          <DatePicker /><br />
        
          <input type='text' name='age' placeholder='Age' onChange={this.handleChange} /><br />
          <input type='text' name='hobby' placeholder='Hobby' onChange={this.handleChange} /><br />
          <input type='submit' name='submit' value='Submit' onClick={() => this.props.onClick(this.state)} />
          </div>
            <div>
            
            
          </div>
        </form>
        
      </div>
    );
  }
}

export default Form;