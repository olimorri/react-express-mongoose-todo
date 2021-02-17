const express = require ('express');
const app = new express();
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./router')
const PORT = 3001; //make sure it isn't the same as react

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  mongoose.connect(`mongodb://localhost:27017/angular-mongoose-todo`,{useNewUrlParser: true, useUnifiedTopology: true})
  console.log(`Connected to db 🗄`)
  console.log(`Server running at http://localhost:${PORT}🚀🧨`)
});


