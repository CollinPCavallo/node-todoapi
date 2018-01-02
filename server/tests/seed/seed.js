const {ObjectId} = require('mongodb');

const jwt = require('jsonwebtoken');
const {Todo} = require('./../../models/todo')
const {Users} = require('./../../models/user')
const user1ID = new ObjectId();
const user2ID = new ObjectId();

const todos = [{
    _id: new ObjectId(),
    text: 'First test todo'

}, {
    _id: new ObjectId(),
    text: 'second test todo'
}]

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const users = [{
    _id: user1ID,
    email: 'Collin@cavallo.com',
    password: 'Password1',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: user1ID, access: 'auth' }, '123abc').toString()
    }]
},{
    _id: user2ID,
    email: 'brad@example.com',
    password: 'password2'

}]

const populateUsers = (done) => {
    Users.remove({}).then(() =>{
        var userOne = new Users(users[0]).save();
        var userTwo = new Users(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
}

module.exports = {todos, populateTodos ,populateUsers, users};
