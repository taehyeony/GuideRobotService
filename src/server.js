import http from "http";
import express from "express";
import WebSocket from "ws";


const app = express();

app.set("view engine", "ejs")
app.set("views", __dirname + "\\views")
app.engine('html', require('ejs').renderFile);
app.use("/public", express.static(__dirname + "/public"));
app.get('/', (req, res) => res.render("index.html"))
app.get('/capStoneMap.html', (req, res) => res.render("capStoneMap.html"))
app.get('/introduce.html',(req,res) => res.render("introduce.html"))
app.get('/capStoneCalender.html',(req,res) => res.render("capStoneCalender.html"))

const handleListen = () => console.log('Hello');

//http 서버
const server = http.createServer(app);

//ws 서버
const wss = new WebSocket.Server({ server })

server.listen(4000, handleListen)