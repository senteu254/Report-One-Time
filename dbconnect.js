//const express = require('express')
import express from 'express'


const app = express();
const mysql = require ('mysql')
const cors = require ('cors')



app.use(cors())
app.use(express.json())

const db = mysql.createConnection ({
  user: "root",
  host: "localhost",
  password:"",
  database: "pamojour"

});

app.post('/sign-up', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const phone = req.body.phone
  const password = req.body.password

  db.query('INSERT INTO user (name, email, phone, password) VALUES (?, ?, ?, ?)',
  [name, email, phone, password], (err, result) => {
    if (err){
      console.log(err)
    }else {
      res.send('Successful!')
    }
  }
  );
})

app.listen(3000, ()=>{
console.log('Conection success!')
})
