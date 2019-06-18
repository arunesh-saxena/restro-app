import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import renderMiddleware from './middleware';
import router from './router';

const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 4040;
const app = express();

/* assets n public path */
app.use(express.static(path.join(process.cwd(), 'public')));

/*
 * server to server api calls
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', router);

/*
 * This is where the magic happens. Server side render goes here
 */

app.get('/*', renderMiddleware);

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});
