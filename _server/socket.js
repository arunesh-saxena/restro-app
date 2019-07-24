import socket from 'socket.io';
import CONSTANTS from './src/constants';

const io = socket();
const clientIds = [];
const { socketEvent } = CONSTANTS;

io.on('connection', (client) => {
    console.log(`a user connected ${client.id}`);
    clientIds.push(client.id);
    client.on(`${socketEvent.subscribeClient}`, (data) => {
        console.log('client is subscribing  ', data, client.id);
        // console.log(data.orderDetails)
        /* send only to just connected client */
        // client.emit('msgFromServer', {msg: `web socket : ${data.msg}`});

        /* send to all connected client */
        io.sockets.emit(`${socketEvent.emitAll}`, {
            clinetId: client.id,
            data
        });

        /* send to specific client */
        // client.to(clientIds[0]).emit('msgFromServer', {msg: `web socket : ${data.msg}`});

        /* send to all connected client except sender */
        // client.broadcast.emit('msgFromServer', {msg: `web socket : ${data.msg}`});
    });

    client.on('disconnect', (reason) => {
        console.log(`user disconnected----------- ${reason} ${client.id}`);
        const ind = clientIds.indexOf(client.id);
        if (ind > -1) {
            clientIds.splice(ind, 1);
        }
    });
});

// io.path('');

// const port = 8000; io.listen(port);

// console.log('listening on port ', port);

export default io;
