const mongoose = require('mongoose');
require('../database/db');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    reg_date: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo


module.exports.newTodo = async (todo, callback) => {
        todo.save(callback); //create New User
}


