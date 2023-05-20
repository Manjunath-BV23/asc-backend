const express = require('express');
const router = express.Router();
const { Task, List, User } = require('./models');

// Login route
router.post('/login', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(200).send(newUser);
      } catch (err) {
        return res.status(500).send(err.message);
      }
});


// Create a new list
router.post('/lists', async (req, res) => {
  try {
    const newList = new List({ name: req.body.name });
    await newList.save();
    res.json(newList);
  } catch (error) {
    console.error('Error creating list:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Update a task (mark as completed or move to another list)
router.put('/tasks/:taskId', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      req.body,
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.put('/tasks/:taskId', async (req, res) => {
    try {
      const { taskId } = req.params;
      const { completed, listId } = req.body;
  
      if (completed) {
        await Task.findByIdAndRemove(taskId);
      } else {
        const task = await Task.findByIdAndUpdate(
          taskId,
          { listId },
          { new: true }
        );
        res.json(task);
      }
    } catch (error) {
        console.error('Error removing task:', error);
        res.status(500).json({ error: 'An error occurred' });
      }
});

module.exports = router;
