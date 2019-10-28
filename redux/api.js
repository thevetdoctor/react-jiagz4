export const apiData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/userse", { cors: 'no-cors',
            headers: { "Content-Type": "application/json" }
          });

    const json = await res.json();
    // console.log('json response', json);
    return json;
  } catch (e) {
    console.log("error response", e);
  }
};
