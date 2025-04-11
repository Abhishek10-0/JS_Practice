import React , {useEffect} from 'react'
import {io} from 'socket.io-client'


const socket = io('http://localhost:5001'); 

function App() {

  useEffect (() => {

    socket.on('connect' , () => {
      console.log('Connected to MCP Server:', socket.id)
    });

    socket.on('disconnect' , () => {
      console.log('Not connected to MCP Server:')
    })

  })


  return (
    <>

      <div className="App">
            <h1>INSANE AI Agent</h1>
            <p>Agent connected to MCP Server: {socket.id}</p>
      </div>  


    </>
  )
}

export default App