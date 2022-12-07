const Comment = require('../models/Comment');

const commentData = [
  {
    text: 'I learned about this in my class!',
    user_id: 1,
    post_id: 1
  },
  {
    text: 'Great post!',
    user_id: 2,
    post_id: 2
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;