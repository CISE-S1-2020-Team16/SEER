var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("SEERdb");
  var myobj = { article: "Runeson:2008ix", author: "Runeson, Per and H{\"o}st, Martin", title: "Guidelines for conducting and reporting case study research in software engineering" , journal: "Empirical Software Engineering", year:"2008" , volume: "14" , number: "2" ,pages:"131--164" , month:"dec" };
  dbo.collection("SEER").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});