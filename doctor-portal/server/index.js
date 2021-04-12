const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 8000

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oqab1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;



app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {

  const appointmentCollection = client.db("doctorsPortal").collection("appointment");
 
 app.post('/addAppointment', (req, res) => {
     const appointment = req.body;
     appointmentCollection.insertOne(appointment)
     .then(result => {
         res.send(result.insertedCount > 0)
     })
 })
 
});

app.listen(port)