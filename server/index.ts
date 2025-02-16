import http from "node:http";
import express from "express";
import { Server } from "socket.io";

const PORT = Bun.env.PORT || 3001;

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Socket.io server is healthy!");
});

// SOCKET.io
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`Socket connected with id: ${socket.id}`);

  socket.on("message", (msg) => {
    // Schema
    // {id: UUID, name: String, type: "text/image/ai/link", content: String}
    socket.broadcast.emit("new_message", msg);
  });

  socket.on("typing", (obj) => {
    // Schema
    // {name: String, status: Boolean}
    socket.broadcast.emit("user_typing", obj);
  });

  socket.on("user", (name) => {
    socket.broadcast.emit("new_user", name);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});