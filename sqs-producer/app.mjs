import express from 'express';
import cors from 'cors';
import sendMessageRouter from './route/send-message-router.mjs';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/producer', sendMessageRouter);

app.get('/health', (req,res) => {
    res.send('Application is healthy');
})

export default app;