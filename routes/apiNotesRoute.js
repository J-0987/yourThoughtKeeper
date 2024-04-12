const notes = require("express").Router();
const { text } = require("express");
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


// GET Route for - get notes to display
notes.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });


  notes.post('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
  const newNote ={
    id: uuid(),
    title: req.body.title,
    text: req.body.text,
  }
    readAndAppend(newNote, "./db/db.json");

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// without utils

// notes.get('/notes', (req, res) => {
//   console.info(`${req.method} request received for notes`);

//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });
// notes.post ('/notes', (req, res) => {
//   console.info(`${req.method} request received for notes`);
//   const newNote ={
//     id: uuid(),
//     title: req.body.title,
//     text: req.body.text,
//   }
//   fs.readFile('./db/db.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const parsedData = JSON.parse(data);
//       parsedData.push(content);
//       writeToFile(file, parsedData);
//       res.json(parsedData);
//     }

//   });
// })

// export

module.exports = notes;