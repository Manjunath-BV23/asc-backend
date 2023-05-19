const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
});

const listSchema = new mongoose.Schema({
  name: String,
});

const userSchema = new mongoose.Schema({
    userid: String,
    password: String,
});
  
  const User = mongoose.model('User', userSchema);
  const Task = mongoose.model('Task', taskSchema);
  const List = mongoose.model('List', listSchema);
  
  module.exports = { Task, List, User };