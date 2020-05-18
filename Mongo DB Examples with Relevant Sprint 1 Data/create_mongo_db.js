var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/SEERdb";

MongoClient.connect(url, function(err, db) {
  useUnifiedTopology: true
  if (err) throw err;
  console.log("Database created!");
  console.log("db object points to the database : "+ db.databaseName);
  db.close();
  
});