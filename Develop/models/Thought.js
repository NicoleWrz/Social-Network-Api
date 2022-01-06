const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
  {
    // TODO: add thoughtText
    thoughtText: {
      type: String,
      required: true,
      maxlength: 250,
      minlength: 1,
    },

    // TODO: add createdAt
    createdAt: {
      type: Date,
      default: Date.now,
      //Use a getter method to format the timestamp on query
      get: timestamp => {
        dateFormat(timestamp)
      }
    },

    // TODO: add username
    username: {
    type: String,
    required: true,
  },
    // TODO: add reactions
    reactions: [reactionSchema]
  },
  {
    // TODO: Add toJSON option
    toJSON: {
      getters: true
    }
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
