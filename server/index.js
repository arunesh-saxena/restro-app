import express from 'express';
import path from 'path';
import renderMiddleware from './middleware';
import router from './router';

const PORT = process.env.PORT || 3030;
const app = express();

/* assets n public path */
app.use(express.static(path.join(process.cwd(), 'public')));

/* 
  * server to server api calls
 */

app.use('/api', router);

/*
	* This is where the magic happens. Server side render goes here
*/

app.get('/*', renderMiddleware);

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});