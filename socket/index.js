const express = require('express')
const { Server } = require('socket.io')
const cors = require('cors')
const { createServer } = require('node:http')
const app = express()
app.use(cors())

const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

let users = []

app.get('/', (req, res) => {
    res.send('socket connection is on')
})

const addUser = (userData, socketId) => {
    const existingUser = users.find(user => user.sub === userData.sub);
    console.log(existingUser, '23')
    if (existingUser) {
        existingUser.socketId = socketId;
    } else {
        users.push({ ...userData, socketId });
    }
}

const getUser = (userId) => {
    console.log(users, userId,'line 33')
    return users.find(user => user.sub == userId)
}

io.on('connection', (socket) => {
    socket.on('addUsers', async (user) => {
        addUser(user, socket.id)
        io.emit('getUsers', users)
    })

    socket.on('sendMessege', (data) => {
        console.log(data)
        const userdata = getUser(data.receiverId)
        console.log(userdata, 'line 46')
        io.to(userdata.socketId).emit('getMessege', data)
    })
})

server.listen(9000, () => {
    console.log('server is connected on port 9000')
})