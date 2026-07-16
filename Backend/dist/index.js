import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        const paresdMessage = JSON.parse(message); // first lets make the msg a obj
        if (paresdMessage.type === "join") {
            console.log("user joined room: ", paresdMessage.payload.roomId);
            allSockets.push({
                socket,
                room: paresdMessage.payload.roomId
            });
        }
        if (paresdMessage.type === "chat") {
            const currentUserRoom = allSockets.find((x) => x.socket == socket)?.room;
            console.log("user is in room: ", currentUserRoom);
            console.log("message: ", paresdMessage.payload.message);
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i]?.room == currentUserRoom)
                    allSockets[i]?.socket.send(paresdMessage.payload.message);
            }
        }
    });
    // socket.on("close",()=>{
    //     allSockets = allSockets.filter(x => x != socket);
    // })
});
//# sourceMappingURL=index.js.map