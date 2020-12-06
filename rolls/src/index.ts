import cookieSession from 'cookie-session';
import express from 'express';
import { json} from 'body-parser';
import { NotFoundError } from './errors/not-found-error';
import { rollRouter } from './routes/roll';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: true
}));

app.use(rollRouter);
app.all('*', async (request, result) => {
    throw new NotFoundError();
});
app.use(errorHandler);

const start = async () => {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Listening on port ${port}!`);
    });
}

start();