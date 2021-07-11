const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is great"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "What will those scholars of Oxenfurt think of next?"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Congrats to everyone who made this happen"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We just reached a million subscribers! Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is terrible news"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "We've been waiting a long time to get this running.  The day is finally here!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful! Thank you!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice job!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;