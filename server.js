const express = require('express');
const apiRoutes = require("./routes/apiNotesRoute");
const uuid = require("./helpers/uuid");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path")


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
// ? wouldn't it be in the apiNotes route? How do these two scripts interact? server and apiRoute?
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);


// catchall endpoint

app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
  );

// Start server on port
app.listen(PORT, function () {
    console.log(`Listening on PORT http://localhost:${PORT}`);
});


