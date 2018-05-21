const express = require('express')
const app = express()
const cors = require('cors')
var fs = require('fs');
var store; // our patientdata
const static_store = require('./patients.json') // static data

//app.use(bodyParser.json())
app.use(cors())

// async reading of the json file
fs.readFile('patients.json', 'utf8', function (err, data) {
  if (err) throw err;
  store = JSON.parse(data);
});


app.get('/', (req, res) => {
  res.json('Welcome to patientbase!')
});

app.get('/patients', (req, res) => {
  if (!req.query.name) {
    return res.json(store)
  }

  var searchName = function(searchqry) {
    return store.filter(patient => patient.full_name.indexOf(searchqry) > -1) 
  }

  result_set = searchName(req.query.name)
  res.json(result_set)
});

app.get('/patient/:mrn', (req, res) => {

  var findByMRN = function(_mrn) {
    var found = store.find(function(patient) {
      return patient.mrn == _mrn
    }) 

    if (!found) {
      return null
    }
    return found
  }

  res.json( findByMRN(req.params.mrn) )

});

app.listen(5000, () => console.log('PatientBase API is running on port 5000!'))