import cookieSession from 'cookie-session';
import express from 'express';
import { json} from 'body-parser';
// import { NotFoundError } from './errors/not-found-error';
// import { errorHandler } from './middlewares/error-handler';
import mongoose from 'mongoose';
import logger from './logger';
// import { Monster } from './models/monster';

const app = express();
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: true
}));


app.all('*', async (request, result) => {
    // throw new NotFoundError();
});
// app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect('mongodb://e5-database-mongo-srv:27017/5e-database', {
            useNewUrlParser: true
        }, (err) => logger.error(err));
        const db = mongoose.connection;
        db.on('error', (args) => logger.error(args));
        db.once('open', () => {
            logger.info("We're connected!")
                // if (!data) return next();
                // res.status(200).json(data);
                // })
                // .catch(err => {
                // next(err);
                // });
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