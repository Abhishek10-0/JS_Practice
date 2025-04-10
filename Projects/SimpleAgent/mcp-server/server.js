const express = require ('express')
const http = require('http')
const Server = require('socket.io')
const cors = require('cors');



const app = express()
app.use(cors());


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    console.log('🔵 New Agent Connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('🔴 Agent Disconnected:', socket.id);
    });
});


app.get('/' , (req, res) => {
    res.send('MCP Server is running...');
})

server.listen(5000, () => {
    console.log('MCP Server running on http://localhost:5000');
});
