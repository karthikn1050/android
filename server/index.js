const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const socketIo = require("socket.io");
const methodOverride = require("method-override");

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
require("dotenv").config();

// Sample route
app.get("/", (req, resp) => {
  resp.send("GE App is Working");
});

const PORT = 5001;
const server = http.listen(PORT, () => {
  console.log(`Report server Started on ${PORT}`);
});

// Connect to the Socket.IO server
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

// Handle socket.io connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Define custom events and handle them here
  socket.on("MessageFromAndroid", (message) => {
    console.log("Message from client:", message);
    // Broadcast the message to all connected clients
    io.emit('information', message);
  });

  // Handle disconnect event
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Uncomment and adjust this section if you want to use a Socket.IO client
// const ioClient = require("socket.io-client");
// const socket = ioClient("http://localhost:5001");
// socket.on("connect", () => {
//   console.log("Connected to the server.");
//   socket.emit("message", "Hello from Node.js!");
// });
// socket.on("send_image", (message) => {
//   console.log(message);
// });
// socket.on("disconnect", () => {
//   console.log("Disconnected from the server.");
// });
