const express = require ('express')
const http = require('http')
const {Server} = require('socket.io')
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

let agents = [];

const assignTaskToAgent = (socket) => {
    const tasks = [
        'Fetch weather data',
        'Fetch latest news',
        'Analyze stock market',
        'Scrape a website'
    ];

const randomTask = tasks[Math.floor(Math.random() * tasks.length)];

socket.emit('task', randomTask);
console.log('🛠️ Task assigned:', randomTask, 'to agent:', socket.id);

const agent = agents.find(a => a.id === socket.id);
if (agent) {
    agent.busy = true;

    }
}

io.on('connection', (socket) => {
    console.log('New Agent Connected:', socket.id);

    agents.push({
      id: socket.id,
      busy: false,
    });

    assignTaskToAgent(socket);


    socket.on('taskCompleted', (result) => {
        console.log("Task Completed by Agent: " , socket.id, "Result: ", result);


        const agent = agents.find(a => a.id === socket.id);
        if(agent) {
        agent.busy = false;
        }
    })


    socket.on('disconnect', () => {
        console.log('Agent Disconnected:', socket.id);

        agents = agents.filter(agent => agent.id !== socket.id);
    });


    
    
});


app.get('/' , (req, res) => {
    res.send('MCP Server is running...');
})

server.listen(5001, () => {
    console.log('MCP Server running on http://localhost:5001');
});
