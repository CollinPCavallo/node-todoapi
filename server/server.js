var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');
var {ObjectId} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos',(req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});
app.get('/todos/:id', (req, res) => {
    var id = req.params.id
    
    if (!ObjectId.isValid) {
       return res.status(404).send()
    }
    
    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send()
        };
        res.send({todo});
    }).catch((e) => res.status(404).send())
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});


module.exports ={app};
