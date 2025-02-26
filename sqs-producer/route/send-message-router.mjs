import express from 'express';
import sendMessage from '../controller/send-message-controller.mjs';

const router = express.Router();

router.post('/', sendMessage);

export default router;