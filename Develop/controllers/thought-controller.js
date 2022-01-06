const { Thought, User } = require('../models');

const thoughtController = {
  // get all thoughts
  getThoughts(req, res) {
    // TODO: Your code here
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err))
  },
  
  // get single thought by id
  getSingleThought(req, res) {
    // TODO: Your code
    Thought.findOne({_id: req.params.thoughtId})
      .then((thought) => 
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a thought
  createThought(req, res) {
    // TODO: create a thought and add the thought to user's thoughts array
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          {username: body.username},
          {},
          { new: true }
        )
      })

  },

  // update thought
  updateThought(req, res) {
    // TODO: update thought

  },

  // delete thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }

        // remove thought id from user's `thoughts` field
        return User.findOneAndUpdate(
          { thoughts: req.params.thoughtId },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Thought created but no user with this id!' });
        }
        res.json({ message: 'Thought successfully deleted!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add a reaction to a thought
  addReaction(req, res) {
    //  TODO: add reaction to thought's reaction array

  },

  // remove reaction from a thought
  removeReaction(req, res) {
    // TODO: remove reaction from thoughts

  },
};

module.exports = thoughtController;
