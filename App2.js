const populate = async(user) => {
  
    const savedUser = await store.dispatch({
      type: 'ADD_USER',
      user
    });
    return savedUser;
}

if (JSON.parse(localStorage.getItem('usersDB')).apiData) {
let newUsers = JSON.parse(localStorage.getItem('usersDB').apiData);
  for (let x of newUsers) {
for (let i = 0; i < 6; i++) {
      // populate(x);
      console.log(x);;
    }
}
}


const populate = () => {
let newUser = JSON.parse(localStorage.getItem('usersDB'));
    console.log(newUser.apiData.length);
    let count = Math.floor(Math.random() * 5);
    if (newUser.apiData) {
    store.dispatch({
      type: 'ADD_USER',
      newUser: newUser.apiData[count]
    });
    }
}