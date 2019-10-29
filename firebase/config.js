  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyAQOoTjLZg9KzwHECIx6DMPr57l1rfSvt0",
    authDomain: "quickstart-1559031126554.firebaseapp.com",
    databaseURL: "https://quickstart-1559031126554.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();