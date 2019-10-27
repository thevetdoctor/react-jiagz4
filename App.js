import React from 'react';
import { useSelector } from 'react-redux';
import store from './redux/store';
import { Icon } from 'antd';
import Hello from './Hello';
import Users from './Users';
import Form from './Form2';
import './style.css';
// import populate from './populate';



const App = () => {

const state = store.getState();
// store.subscribe((state) => console.log('calling subscribe!'));

const name = useSelector(state => state.name);
const errorMessage = useSelector(state => state.errorMessage);
const users = useSelector(state => state.users);
const formview = useSelector(state => state.formView);

const handleDelete = (id) => {

  store.dispatch({
  type: 'DELETE_USER',
  id,
});

}

const handleSaga = () => {
  
  store.dispatch({
  type: 'GET_DATA',
});
}

const viewForm = (formview) => {

  store.dispatch({
    type: 'FORM_VIEW',
  });
}

const handleClick = (formValues) => {
  console.log('input =>', formValues);
  
const { firstname, lastname, birthday, age, hobby } = formValues;

let usersInState = [ ...users ];
let userExist = usersInState.filter(user => user['firstname'] === formValues['firstname'] && user.lastname === formValues.lastname);

if (userExist.length) {
   error = 'User exists already';
  
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
      console.log('item', item, formValues[item] ? formValues : 'not supplied');
      error = `${item} not supplied!`;

      store.dispatch({
        type: 'LOG_ERROR',
        error,
      });
    
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

   store.dispatch({
      type: 'ADD_USER',
      newUser,
   });

  console.log('submitted', 'newUser =>', newUser, 'newState =>', newState);
} 

// const dispatch = useDispatch();

const populate = () => {

console.log(JSON.parse(localStorage.getItem('usersDB')).apiData);
// store.dispatch({
//   type: 'ADD_USER',
//   // user
// });
}
populate();
 
    return (
      <div  className='text-underlined'>
        <Hello name={name} />
        <div className='links'>
        <div>
          <span><a href='https://www.facebook.com/huntiololo' target="_blank"><Icon className='fb logo' type="facebook" /></a></span>
          <span><a href='https://www.twitter.com/animalworldng' target='_blank'><Icon className='twitter logo' type="twitter" /></a></span>
          <span><a href='https://www.instagram.com/animalworldng' target='_blank'><Icon className='insta logo' type="instagram" /></a></span>
        </div>
        <div>

          <span className='btn' onClick={handleSaga}><Icon type="plus-circle" /></span>

        {!formview ?
          <span className='btn' onClick={viewForm}><Icon type="plus-circle" /></span>
          :
          <span className='btn' onClick={viewForm}><Icon type="close-circle" /></span>
        }
        </div>
        </div>
        {formview ? 
        <span>
        {errorMessage ? <span className='error'>{errorMessage} </span> : <span></span>}
        <Form onClick={handleClick}/>
        </span>
        :
        <span></span>
        }
        <hr />
        <Users users={users} onDelete={handleDelete}/>
        <p style={{color: '#333'}}>
        NB: Click <span style={{color: '#fff'}}><Icon type='delete'/></span> to delete a user from the record!
        </p>
        <p>
          .... Development in progress ...!!!
        </p>
      </div>
    );
  }

export default App;