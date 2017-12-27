const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {Users} = require('./../server/models/user')

var id = '5a401af175dc2060254ad714'

if (!ObjectId.isValid(id)) {
    return console.log('ID is not valid')
}

Users.findById(id).then((user) =>{
    if (!user) {
        return console.log('User Not found')
    }
    console.log('User', user)
}).catch((e) =>console.log(e))

// var id = '5a43de6a4c508ff82ed3103311'

// if(!ObjectId.isValid(id)) {
//     return console.log ('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('TODO', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('ID not found')
//     }
//     console.log('Todo By Id', todo)
// }).catch((e) => console.log(e))