import io from 'socket.io-client';
import appUrl from '../appConstants/appUrls';
import appConstants from '../appConstants/appConstants';

const socket = io(`${appUrl.SOCKET_URL}`, { autoConnect: false });

const { socketEvent } = appConstants;

function subscribeToMsg(callBack) {
    socket.open();
    console.log('subscribeToMsg');

    socket.on(`${socketEvent.subscribeServer}`, (data) => {
        console.log(data);
    });
}

function unSubscribeToMsg() {
    console.log('unSubscribeToMsg');
    socket.close();
}

function emitMsg(data) {
    socket.emit(`${socketEvent.emitToServer}`, data);
}

socket.on('disconnect', (reason) => {
    console.log(reason);
});

export { subscribeToMsg, unSubscribeToMsg, emitMsg };
