const express = require("express");
const cors = require("cors");
const server = express()
server.use(express.json());
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
};
server.use(cors(corsOptions));
const fruits = ["apple", "banana", "orange", "grape"];

server.get("/api", (req, res) => {
    res.json(fruits);
});
server.post("/api", (req, res) => {
    const thing = req.body.item 
    console.log("Received:", thing);
    fruits.push(thing);
    res.status(201).send("Added");
});
server.listen(3001, () => {
    console.log("Server is running on port 3001");
});