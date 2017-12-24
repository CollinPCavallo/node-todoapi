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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a4007e5fc1380c063be5e94')
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((results) =>{
    //     console.log(results)
    // })
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a3fe6a402f34a3ef4b0160c')
    },{
        $set: {
            name: 'Collin'
        },
        $inc:{
            age: -1
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(result)
    })

    // db.close();
});