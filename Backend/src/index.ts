import type { WebSocket } from 'ws';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });


let userCount=0;
let allSockets: WebSocket[]=[];


wss.on("connection", (socket)=>{
    allSockets.push(socket);

    userCount+=1;
    console.log("user connected #"+ userCount);

    socket.on("message",(event)=>{
        console.log("msg received : " + event.toString());
        for(let i=0; i < allSockets.length;i++){
            const s = allSockets[i];
            s?.send(event.toString());
        }
    })

})