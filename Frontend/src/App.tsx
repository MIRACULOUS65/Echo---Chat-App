
import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const [messages, setMessages] = useState(["hi there", "hello"]);
  const wsRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");

    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }
    wsRef.current=ws;

    ws.onopen = () =>{
      ws.send(JSON.stringify({
        type:"join",
        payload:{
          roomId:"red"
        }
      }))
    }
    return ()=>{
      ws.close()
    }

  }, []);


  return (
    <div className="h-screen bg-black">
      <br /><br /><br />
      <div className="h-[85vh]">
        {messages.map(message => <div className="m-8">
          <span className="bg-white text-black rounded p-4 m-8">
            {message}
          </span>
        </div>
        )}
      </div>
      <div className="w-full bg-white flex gap-2 p-2">
        <input id="message" className=" w-full p-4" placeholder="Type your message here..."></input>
        <button onClick={()=>{
          const message = document.getElementById("message").value;
          wsRef.current.send(JSON.stringify({
            type:"chat",
            payload:{
              message:message
            }
          }))
        }} className="bg-purple-600 text-white p-4">
          Send message
          </button>
      </div>
    </div>
  )
}

export default App


//workflow in one line: user types message -> click send button -> message is sent to backend -> backend sends message to all users in the same room -> frontend receives message and adds it to the list of messages

//more in detailed first every time the page loads the websocket connection to 8080 gets esbablished-> and hardcoded msges got loaded -> whenevr user got connected to the websocket we also hardcoded the user to join a room called red -> when user types a message and clicks send button -> onclick function gets called -> it gets the value of the input field and sends it to the backend in a json format with type chat and payload containing the message -> backend receives the message and checks if its type is chat -> if yes then it finds the room of the user who sent the message -> then it loops through all the users and sends the message to all users in the same room -> frontend receives the message and adds it to the list of messages which gets rendered on the screen