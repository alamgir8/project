const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 6000;




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oqab1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log(err);
  const foodsCollection = client.db("red-onion").collection("foods");
 
});

app.use(cors());
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port)