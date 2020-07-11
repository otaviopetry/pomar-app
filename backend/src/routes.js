const express = require('express');
const { Router } = require('express');

// Create express instance
const routes = express.Router();

// Quiz questions
const Questions = require('./data/questions.json');

// Fictional user data
const User = require('./data/user.json');

// Sugestions for main gallery
const Sugestions = require('./data/sugestions.json');

// Featured books for main gallery
const Featured = require('./data/featuredBooks.json');

// ROUTES

routes.get('/profile', (request, response) => {    
    response.json(User);
})

routes.get('/quiz/01', (request, response) => {
    response.json(Questions);
    console.log('Ariba')
})

routes.get('/sugestions', (request, response) => {
    response.json(Sugestions);
})

routes.get('/featured', (request, response) => {
    response.json(Featured);
})

routes.get('/user/achievements', (request, response) => {
    response.json(User.badges);
})

module.exports = routes;