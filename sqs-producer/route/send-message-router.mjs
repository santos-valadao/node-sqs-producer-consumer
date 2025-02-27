import express from 'express';
import * as sendMessageController from '../controller/send-message-controller.mjs';

const router = express.Router();

router.post('/', sendMessageController.sendMessage);

export default router;