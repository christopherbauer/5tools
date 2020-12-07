import { errorHandler, logger, CustomErrors } from '@5tools/common';
import cookieSession from 'cookie-session';
import express from 'express';
import { json} from 'body-parser';
import mongoose from 'mongoose';
import { encounterRoute } from './routes/encounterRoute';

const app = express();
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: true
}));

app.use(encounterRoute);
app.all('*', async (request, result) => {
    throw new CustomErrors.NotFoundError();
});
app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect('mongodb://e5-database-mongo-srv:27017/5e-database', {
            useNewUrlParser: true
        }, (err) => logger.error(err));
        const db = mongoose.connection;
        db.on('error', (args) => logger.error(args));
        db.once('open', () => {
            logger.info("We're connected!")
        });
    } catch (err) {
        logger.error(err);
    }
    const port = 3001;
    app.listen(port, () => {
        console.log(`Listening on port ${port}!`);
    });
}

start();