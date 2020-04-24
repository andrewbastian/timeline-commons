const express = require('express');

//const TimelinesRouter = require('./timelines/timelinesRouter.js');

const server = express();

server.use(logger)

server.use(express.json());

//server.use('/api/timelines', TimelinesRouter);

function logger(req, res, next) {
	console.log(`[${new Date().toISOString()}] - ${req.method} - ${req.url} - ${req.get("User-Agent")}`)
	next()
}
module.exports = server;