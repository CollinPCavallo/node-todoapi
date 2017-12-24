// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server')
    }
    console.log('Connected to Mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a3ff5b7fc1380c063be57f9')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))

    // }, (err) => {
    //     consol.log('unable to fetch todos', err)
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
        

    // }, (err) => {
    //     consol.log('unable to fetch todos', err)
    // });

    db.collection('Users').find({name:'Collin'}).count().then((count) =>{
        console.log(`Todos Count: ${count}`)
    })

    // db.close();
});