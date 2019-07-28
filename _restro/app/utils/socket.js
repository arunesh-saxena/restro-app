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
    socket.on(socketEvent.subscribeServer, (data) => {
        if (callBack && typeof callBack === 'function') {
            callBack(data);
        }
    });
}

function unSubscribeToMsg() {
    socket.close();
}

function emitMsg(data) {
    socket.emit(socketEvent.emitToServer, data);
}

const emitOrderPlaced = (data) => {
    socket.emit(socketEvent.emitOrderPlaced, data);
};

const subscribeOrderPlaced = (callBack) => {
    socket.on(socketEvent.subscribeOrderPlaced, (data) => {
        if (callBack && typeof callBack === 'function') {
            callBack(data);
        }
    });
};

init();

export {
    subscribeToMsg,
    unSubscribeToMsg,
    emitMsg,
    emitOrderPlaced,
    subscribeOrderPlaced
};
