// const express = require('express');
import express from 'express';
import Database from '../lib/database.js';

const router = express.Router();
const db = new Database();

/**
 * Get users list from database
 */
router.get('/getUsers', (req,res) => {
    db.getUsers().then(events => { return res.json(events)} );
    console.log("👉 GET /api/users/getUsers");
    console.log("👈 RESPONSE : " + JSON.stringify(res.body));
});

/**
 * Add new user to user collection in database
 */
router.post('/addUser', (req,res) => {

    const userId = req.params.userId; 

    console.log("👉 POST /api/users/addUser/" + id);
    console.log("👈 RESPONSE : " + JSON.stringify(req.body));
    db.addUser(id);
    res.sendStatus(200);
});

export default router;