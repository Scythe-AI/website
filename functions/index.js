const functions = require("firebase-functions");
const { initializeApp } = require('firebase-admin/app');
const admin = require('firebase-admin');

const { getAuth } = require('firebase-admin/auth');
initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: 'scythe-ai',
    storageBucket: 'scythe-ai.appspot.com',
    databaseURL: 'https://scythe-ai-default-rtdb.firebaseio.com'
});

defaultAuth = getAuth();

const express = require('express');
const cors = require('cors');

const app = express();
app.get('/:uid', (req, res) => {
    defaultAuth.updateUser(req.params.uid, {emailVerified: true})
    .then((userRecord) => {
        console.log('Successfully updated user', userRecord.toJSON());
        res.send('Successfully updated user');
    })
    .catch((error) => {
        console.log('Error updating user:', error);
        res.send('Error updating user');
    });
  })

exports.verifyEmail = functions.https.onRequest(app);

