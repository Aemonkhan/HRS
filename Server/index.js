const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors')
const registrationRoute  = require('./routes/api/registration.js')
const welfareRoute  = require('./routes/api/welfare.js')
const serviceRoute  = require('./routes/api/service.js')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
const PORT = process.env.PORT || 4000
///connect to db
dbConnect()
  ///to start app
  app.listen(PORT, (req,res)=>{
  console.log('server is running at', PORT)
  })
  
///Routes
app.use('/api/registration', registrationRoute )
app.use('/api/welfare', welfareRoute )
app.use('/api/service', serviceRoute )
