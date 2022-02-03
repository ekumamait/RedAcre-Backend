import express from "express";
import axios from 'axios';

// defining middleware routes
const router = express.Router();

router.get('/investors', (req,res) => {
    axios.get('http://0.0.0.0:9000/').then(
        (response) => {
            res.send(response.data)
    });
})

export default router;