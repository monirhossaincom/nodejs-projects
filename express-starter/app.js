const express = require('express');
const app = express();

const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());

// routes
app.use('/', (req, res) => {
  res.status(200).send('Hello');
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
