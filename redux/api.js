export const apiData = async (user) => {
  
  let url = `https://us-central1-quickstart-1559031126554.cloudfunctions.net/createNewUser?f=${user.firstname}&l=${user.lastname}&b=${user.birthday}&a=${user.age}&h=${user.hobby}`;
  try {
    const res = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' }});

    // ("https://jsonplaceholder.typicode.com/users", {
    //   cors: "no-cors",
    //   headers: { "Content-Type": "application/json" }
    // });

    const json = await res.json();
    console.log('json response', json);
    return json;
  } catch (e) {
    console.log("error response", e);
  }
};
