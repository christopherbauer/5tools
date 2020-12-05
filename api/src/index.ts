import cookieSession from 'cookie-session';
import express from 'express';
import { json} from 'body-parser';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: true
}));

app.all('*', async (request, result) => {
    throw new NotFoundError();
});

const start = async () => {
    app.listen(3000, () => {
        console.log("Listening on port 3000!");
    });
}

start();