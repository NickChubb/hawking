// const express = require('express');
import Express from 'express';
import Database from './database.js';

const router = Express.Router();
const db = new Database();

/**
 * Get events list from database
 */
router.get('/getEvents', (req,res) => {
    db.getEvents().then(events => { return res.json(events)} );
    console.log("👉 GET /api/events/getEvents");
    console.log("👈 RESPONSE : 200");
});

/**
 * Add new event to event database
 */
router.post('/addEvent', (req,res) => {

    const eventTitle = req.body.eventTitle;
    const eventDescription = req.body.eventDescription;
    const eventLocation = req.body.eventLocation;
    const eventStartTime = req.body.eventStartTime;
    const eventEndTime = req.body.eventEndTime;
    const eventDate = req.body.eventDate;  

    console.log("👉 POST /api/events/addEvent/" + JSON.stringify(req.body));
    console.log("👈 RESPONSE : 200");
    db.addEvent(eventTitle, eventDescription, eventLocation, eventDate, eventStartTime, eventEndTime, "");
    res.sendStatus(200);
});

/**
 * Delete event from Database
 */
router.delete('/deleteEvent', (req, res) => {

    const id = req.body.id;

    console.log("👉 DELETE /api/events/deleteEvent/" + id);
    console.log("👈 RESPONSE : " + JSON.stringify(req.body));
    db.deleteEvent(id);
    res.sendStatus(200);
});

export default router;