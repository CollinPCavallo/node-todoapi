// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server')
    }
    console.log('Connected to Mongodb server');

    // deleteMany
    // db.collection('Todos').deleteMany({ text: "Eat lunch"}).then((results) => {
    //     console.log(results)
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((results) => {
    //     console.log(results)
    // });
    //findOneandDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((results) =>{
    //     console.log(results);
    // });
    // db.collection('Users').deleteMany({name: 'Collin'}).then((results) => {
    //     console.log(results)
    // });
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5a4006fdfc1380c063be5e59')}).then((results) =>{
        console.log(JSON.stringify(results, undefined, 2))
    });


    // db.close();
});