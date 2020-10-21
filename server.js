const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const path = require("path");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const port = process.env.PORT || 5000;
const server = express()
    .use(cors())
    .use(express.static(path.join(__dirname, "client/build")))
    .listen(port, error => {
        if (error) throw error;
        console.log(`Server has started and running on port ${port}`);
    })

const io = socketio(server);

io.on("connect", (socket) => {
    socket.on("join", ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        socket.join(user.room);
        socket.emit("message", { user: "admin", text: `${user.name}, welcome to room ${user.room}` });
        socket.broadcast.to(user.room).emit("message", { user: "admin", text: `${user.name} has joined the chat.` });

        io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    })

    socket.on("sendMessage", (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit("message", { user: user.name, text: message })
        callback();
    })

    socket.on("disconnect", () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit("message", { user: "admin", text: `${user.name} has left the chat.` });
            io.to(user.room).emit("roomData", { room: user.room, users: getUsersInRoom(user.room) });
        }
    })
})