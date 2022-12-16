function onOpen(ws) {
    return ws.onopen = () => {
        console.log('Connection with server was established')
        ws.send(JSON.stringify({ username: 'server', message: 'New client connected'}));
    };
}

function onClose(ws) {
    return ws.onclose = () => {
        console.log('Connection with server was closed')
    };
}

function onMessage(ws, container) {
    return ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const html = `<li><b>${data.username}:</b> ${data.message}</li>`;
      
        container.insertAdjacentHTML('beforeend', html);
    };
}

function onError(ws) {
    return ws.onerror = (error) => {
        console.log('Error', error);
    };
}

export { onOpen, onClose, onMessage, onError };