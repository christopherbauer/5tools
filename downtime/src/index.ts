import cookieSession from 'cookie-session';
import express from 'express';
import { json} from 'body-parser';
import { CustomErrors, errorHandler } from '@5tools/common';
import { downtimeRouter } from './routes/downtimeRoute';
import { carousingRouter } from './routes/carousing/carousingRoute';

const app = express();
app.use(json());
app.use(cookieSession({
    signed: false,
    secure: true
}));

app.use(downtimeRouter);
app.use(carousingRouter);
app.all('*', async (request, result) => {
    throw new CustomErrors.NotFoundError();
});
app.use(errorHandler);

const start = async () => {
    const port = 3002;
    app.listen(port, () => {
        console.log(`Listening on port ${port}!`);
    });
}

start();