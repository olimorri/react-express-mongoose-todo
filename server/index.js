const express = require ('express');
const app = new express();
const cors = require('cors');

//TODO: make sure to link this properly - const router = require('./router')
const PORT = 3000;

app.use(cors());
app.use(express.json());
//TODO: app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}🚀🧨`)
});


