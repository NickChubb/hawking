import v4 from 'uuid';
import express from 'express';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { password } =  require('../config.json');
const router = express.Router();

/**
 * Login API
 */

router.use('/login', (req, res) => {

    const credentials = req.body;
    const validCredentials = { "password": password }

    if (JSON.stringify(credentials) == JSON.stringify(validCredentials)) {
        res.status(200);
        res.send({
            token: v4()
        });
    } else {
        res.sendStatus(401);
    }
});

export default router;