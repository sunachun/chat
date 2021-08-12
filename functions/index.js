const functions = require("firebase-functions");

exports.myFunction = functions.firestore
  .document('my-collection/{docId}')
  .onWrite((snapshot, context) => {
    console.log(snapshot.data());

    return;
  });
