var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

var serialport = require('serialport');
// var Serialport = serialport.SerialPort;
var Serialport = serialport;

var portName = "/dev/cu.usbmodem1411";
// var portName = "/dev/cu.usbmodem1411";
var myPort = new Serialport(portName, {
	baudrate: 9600
	// parser: serialport.parsers.readline("\n")
});

myPort.on('open', onOpen);
// myPort.on('data', onData);

// function onData(info) {
// 	console.log('info')
// }

function onOpen() {
	console.log('Arduino Connected');
}

server.listen(8000, function(){
	console.log('Server running...')
});