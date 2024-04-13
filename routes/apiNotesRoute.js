
const notes = require("express").Router();
const { text } = require("express");
const { readFromFile, readAndAppend, deleteNote } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');
const fs = require('fs');


// GET Route for - get notes to display
notes.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
  
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  // Post routes

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


  notes.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request received for notes`);
    const noteId = req.params.id;
    deleteNote(`./db/db.json`); 
  });
  


module.exports = notes;