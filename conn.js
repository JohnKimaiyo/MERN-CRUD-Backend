// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/merncrud');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const dbobject =  mongoose.connection

dbobject.on('connected',() =>{console.log('mongo db connected successfully')});
dbobject.on('error',() =>{console.log('mongo db connection failed')});

module.exports = mongoose