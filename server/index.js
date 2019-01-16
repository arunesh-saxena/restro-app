import express from 'express';
import path from 'path';


import renderMiddleware from './middleware';

const PORT = process.env.PORT || 3030;
const app = express();

/* assets n public path */
app.use(express.static(path.join(process.cwd(), 'public')));

/*
	* This is where the magic happens. Server side render goes here
*/
  
app.get('/*', renderMiddleware);

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});