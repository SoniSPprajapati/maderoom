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
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});