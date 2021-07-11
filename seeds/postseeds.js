const { Post } = require('../models');

const postData = [
    {
        title: "Geralt of Rivia wins Gwent Tournament",
        post_content: "Witcher Geralt of Rivia has won the Novigrad high-stakes Gwent Tournament, bringing home the grand prize of 9,000 Novigrad crowns.  Using a Northern Realms deck, he bested 7 other contestants to take 1st place.",
        user_id: 3
    },
    {
        title: "Yennefer of Vengerberg destroys priceless artifact",
        post_content: "The sorceress Yennefer of Vengerberg recently stole the Mask of Uroboros, a priceless artifact from Kaer Trolde keep on Ard Skellig, Skellige.  She then proceeded to head to a nearby forest and activate it, killing every tree in a 10 mile radius.",
        user_id: 1
    },
    {
        title: "Nilfgaard claims they've developed a flying machine",
        post_content: "The Emperor of Nilfgaard has claimed that he and his team of mages have developed a flying machine.  No further details about this potential new machine are known, but if true, it could significantly change the tide of the war.",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;