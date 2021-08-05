// const express = require('express');
import express from 'express';
import ytdl from 'ytdl-core';
import { createRequire } from "module";

const router = express.Router();
const require = createRequire(import.meta.url);
const { musicUrl } =  require('../config.json');

/**
 * Returns the URL of the music set in config
 */
router.get('/getMusicUrl', (req, res) => {
    return res.json({url: musicUrl});
})

/**
 * Get music info
 */
router.get('/getMusicInfo', (req,res) => {
    ytdl.getInfo(musicUrl).then(music => { return res.json(music)} );
    console.log("👉 GET /api/music/getMusicInfo");
    console.log("👈 RESPONSE : " + JSON.stringify(res.body));
});

export default router;