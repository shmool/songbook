import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

function addUid(snapshot, context) {
  return snapshot.ref.update({uid: context.auth.uid});
}

function addToSongList(snapshot, context) {
  const songList = admin.database().ref('/songList');
  const song = {};
  song[context.params.id] = snapshot.val().title;
  return songList.update(song);
}

exports.saveSong = functions.database.ref('/songs/{id}')
  .onWrite((event, context) => {
    if (event.before.exists()) return;
    addUid(event.after, context);
    return addToSongList(event.after, context);
  });
