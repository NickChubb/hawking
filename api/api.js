import express from 'express';

/**
    API Routes
 */
import auth from "./auth.js";
import events from "./events.js";
import music from "./music.js";
import users from "./users.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/events", events);
router.use("/music", music);
router.use("/users", users);

export default router;