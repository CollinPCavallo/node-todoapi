const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { Users } = require('./../server/models/user')


// Todo.findOneAndRemove({})
Todo.findByIdAndRemove('5a43fc7acf9111eb42d8fea6').then('sdfas').then((todo) => {
    console.log(todo)
})