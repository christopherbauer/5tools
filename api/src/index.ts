import cookieSession from 'cookie-session';
import express from 'express';
import { json} from 'body-parser';
import { NotFoundError } from './errors/not-found-error';
import { rollRouter } from './routes/roll';

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

const start = async () => {
    app.listen(3010, () => {
        console.log("Listening on port 3010!");
    });
}

start();