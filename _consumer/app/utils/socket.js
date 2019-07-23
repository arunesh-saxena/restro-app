import io from 'socket.io-client';
import appUrl from '../appConstants/appUrls';
import appConstants from '../appConstants/appConstants';

const socket = io(`${appUrl.SOCKET_URL}`, { autoConnect: false });

const { socketEvent } = appConstants;

function init() {
    socket.on('connect', (client) => {
        console.log(`a user connected ${socket.id}`);
    });
    socket.on('disconnect', (reason) => {
        console.log(reason);
    });
    socket.open();
}

function subscribeToMsg(callBack) {
    socket.on(`${socketEvent.subscribeServer}`, (data) => {
        console.log(data);
    });
}

function unSubscribeToMsg() {
    socket.close();
}

function emitMsg(data) {
    socket.emit(`${socketEvent.emitToServer}`, data);
}

init();

export { subscribeToMsg, unSubscribeToMsg, emitMsg };
