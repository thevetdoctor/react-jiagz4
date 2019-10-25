import React, { Component } from 'react';
import { render } from 'react-dom';
import { useSelector } from 'react-redux';
import { Calendar, DatePicker } from 'antd';
// import Calendar from './Calendar';
import moment from 'moment';
import 'antd/dist/antd.css';

const Form = (props) => {
//   constructor(props) {
//     super(props);
  
//    this.state = {
//     firstname: '',
//     lastname: '',
//     birthday: '', 
//     age: '',
//     hobby: '',
//   }
const formState = useSelector(state => state.formState);
//    this.handleChange = this.handleChange.bind(this);
//    this.handleSubmit = this.handleSubmit.bind(this);
// }

const handleSubmit = (e) => {
e.preventDefault();
// const f = e.target.childNodes[0].childNodes[0];
// const l = e.target.childNodes[0].childNodes[2];
// const b = e.target.childNodes[0].childNodes[4].childNodes[0].childNodes[0].childNodes[0];
// const a = e.target.childNodes[0].childNodes[5];
// const h = e.target.childNodes[0].childNodes[7];

// let inputArray = [f, l, b, a, h];

// for (let input of inputArray) {
//   input.value = '';
// }
// console.log(f.value, b.value);
  }

const handleChange = ({target}) => {
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

    return (
      <div>
        <form className='form-selector' onSubmit={handleSubmit}>
        <div>
          <input type='text' name='firstname' placeholder='Firstname' onChange={handleChange}/><br />
          <input type='text' name='lastname' placeholder='Lastname'  onChange={handleChange} /><br />

          <div onFocus={handleChange}>
          <DatePicker className='date-picker' /><br />
          </div>
        
          <input type='text' name='age' placeholder='Age' onChange={handleChange} /><br />
          <input type='text' name='hobby' placeholder='Hobby' onChange={handleChange} /><br />
          <input type='submit' name='submit' value='Submit' onClick={() => props.onClick(formState)} />
          </div>
        </form>
      </div>
    );
}

export default Form; 