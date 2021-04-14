const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 8000

        


app.use(express.json());
app.use(cors());
     


app.get('/', (req, res) => {
   res.send('Hello!')
 })
                  
         


 

 const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oqab1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 client.connect(err => {
  
   const appointmentCollection = client.db("doctorsPortal").collection("appointment");
   const doctorCollection = client.db("doctorsPortal").collection("doctors");


   app.post('/addAppointment', (req, res) => {
    const appointment = req.body;
    appointmentCollection.insertOne(appointment)
    .then(result => {
        res.send(result.insertedCount > 0)
        })
    })

    app.post('/appointmentByDate', (req, res) => {
      const date = req.body.date;
      appointmentCollection.find({date: date})
      .toArray((err, documents) => {
        res.send(documents)
      })
    })
    
    app.get('/appointments', (req, res) => {
      appointmentCollection.find({})
      .toArray((err, document) => {
        res.send(document)
      })

    })

    app.post('/addDoctor', (req, res) => {
     const newDoctor = req.body;
     doctorCollection.insertOne(newDoctor)
     .then(result => {
       res.send(result.insertedCount > 0)
     })
    })

    app.get('/doctors', (req, res) => {
      doctorCollection.find({})
      .toArray((err, document) => {
        res.send(document)
      })
    })
   
 });
 
        
app.listen(port)