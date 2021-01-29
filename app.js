const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || 9944;
const appName = 'Smalls';


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});


app.use(cors());

const objectArray = [
  {
    "NAME": "Courtney Henry",
    "LOCATION": "775 Rolling Green Rd, Lagos state",
    "STATUS": "No Issues",
    "ENTRIES": {
      "Entry": "19 Unique Entries",
       "Entry_type": "Homogenous"
    },
    "RISK PROFILE": "Low Risk"
  },
  {
    "NAME": "Darrell Steward",
    "LOCATION": "7529 E. Pecan St., Lagos state",
    "STATUS": "2 issues found",
    "ENTRIES": {
      "Entry": "10 Unique Entries",
       "Entry_type": "Homogenous"
    },
    "RISK PROFILE": "Mid Risk"
  },
  {
    "NAME": "Cody FIsher",
    "LOCATION": "3605 Parker Rd, Lagos state",
    "STATUS": "No Issues",
    "ENTRIES": {
      "Entry": "8 Unique Entries",
       "Entry_type": "Homogenous"
    },
    "RISK PROFILE": "Mid Risk"
  },
  {
    "NAME": "Bessie Cooper",
    "LOCATION": "775 Rolling Green Rd., Lagos state",
    "STATUS": "1 Issue found",
    "ENTRIES": {
      "Entry": "12 Unique Entries",
       "Entry_type": "Heterogenous"
    },
    "RISK PROFILE": "High Risk"
  },
  {
    "NAME": "Annette Black",
    "LOCATION": "8080 Railroad St., Lagos state",
    "STATUS": "No Issues",
    "ENTRIES": {
      "Entry": "13 Unique Entries",
       "Entry_type": "Heterogenous"
    },
    "RISK PROFILE": "Low Risk"
  },
  {
    "NAME": "Jenny Wilson",
    "LOCATION": "8080 Railroad St., Lagos state",
    "STATUS": "5 Issues found",
    "ENTRIES": {
      "Entry": "18 Unique Entries",
       "Entry_type": "Homogenous"
    },
    "RISK PROFILE": "High Risk"
  },
  {
    "NAME": "Darlene Robertson",
    "LOCATION": "3890 Poplar Dr. Rd, Lagos state",
    "STATUS": "2 Issues found",
    "ENTRIES": {
      "Entry": "6 Unique Entries",
       "Entry_type": "Homogenous"
    },
    "RISK PROFILE": "Mid Risk"
  },
  {
    "NAME": "Ralph Edwards",
    "LOCATION": "8558 Green Rd, Lagos state",
    "STATUS": "No Issues",
    "ENTRIES": {
      "Entry": "14 Unique Entries",
       "Entry_type": "Homogenous"
    },
    "RISK PROFILE": "Low Risk"
  }
]


app.get('/', (req, res) => {
  console.log('My Validation APP');
  res.send({
    "message": "Yeahhh",
  });
});


app.get('/asb-backend', (req, res) => {
  console.log('My Validation APP');
  res.send({
    "message": "Data fetched",
    data: objectArray
  });
});


app.listen(port, (res) => {
  console.log(`${appName} is listening on ${port}`);
});
