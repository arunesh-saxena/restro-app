import io from 'socket.io-client';

const socket = io('http://localhost:8000', { autoConnect: false });

function subscribeToMsg(cb) {
    socket.open();
    console.log('subscribeToMsg');

    socket.on('msgFromServer', (data) => {
        console.log(data);
    });
}

function unSubscribeToMsg() {
    console.log('unSubscribeToMsg');
    socket.close();
}

function emitMsg(data) {
    socket.emit('subscribeToMsg', data);
}

socket.on('disconnect', (reason) => {
    console.log(reason);
});

export { subscribeToMsg, unSubscribeToMsg, emitMsg };
