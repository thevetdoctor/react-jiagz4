import React, { Component } from 'react';
import { render } from 'react-dom';

class Users extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: 'React Challenge by Enye!'
    // };
  }

  render() {
    return (
      <div>
          Users <span>{this.props.users.length}</span>
          <div className='user-table'>
            <div>
                <span>No</span>
                <span>Firstname</span>
                <span>Lastname</span>
                <span>Birthday</span>
                <span>Age</span>
                <span>Hobby</span>
          </div>   
          {this.props.users.length > 4 ?
          this.props.users.map((item, index) => (
            <div key={index}>
                <span>{index + 1}</span>
                <span>{item.firstname}</span>
                <span>{item.lastname}</span>
                <span>{item.birthday}</span>
                <span>{item.age}</span>
                <span>{item.hobby}</span>
                </div>
          )).reverse()
          // this.props.users.map((item, index) => (
          //   <div key={this.props.users.length - index}>
          //       <span>{this.props.users.length - index}</span>
          //       <span>{item.firstname}</span>
          //       <span>{item.lastname}</span>
          //       <span>{item.birthday}</span>
          //       <span>{item.age}</span>
          //       <span>{item.hobby}</span>
          //       </div>
          // ))
          :
          <div className='no-users'>No users available</div>
          }
          </div>
      </div>
    );
  }
}

export default Users;