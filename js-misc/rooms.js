var read = require('read');


var Room = function (description, exit) {
	this.description = description;
	this.exit = exit;
};

var GameOfRooms = function () {
	this.rooms = [];
	this.currentPosition = 0;
};

GameOfRooms.prototype.addRooms = function (rooms) {
	this.rooms = rooms;
};

GameOfRooms.prototype.keepPlaying = function () {
	this.currentPosition += 1;
	if (this.currentPosition >= this.rooms.length) {
		console.log("GAME OVER");
	} else {
		this.currentRoom = this.rooms[this.currentPosition];
		this.startGame();			
	}
};

GameOfRooms.prototype.checkExit = function (choice) {
	if (choice === this.currentRoom.exit) {
		console.log("Well done! You have survived this room.\n");
		this.keepPlaying();
	} else {
		console.log("Like most of George R.R. Martin's characters, you die a horrible, bloody death.\n");
	};
};

GameOfRooms.prototype.startGame = function () {
	this.currentRoom = this.rooms[this.currentPosition];
	console.log("-----------Instructions----------------\n");
	console.log(this.currentRoom.description + '\n');
	var options = {
		prompt: "Type either N, S, E, or W to choose a direction to move.\n>"
	};
	read(options, function (err, choice) {
		if (err) {
			throw err;
		} else {
			this.checkExit(choice);
		}
	}.bind(this));
};

var roomOne    =   new Room("You are are the Wall. There are Wildlings attacking from below and they are about to breach the top.", "N"); 
var roomTwo    =   new Room("You are in the Red Keep and the King has summoned his Guard to arrest you. You have two exit doors in your room.", "E");
var roomThree  =   new Room("You are in the Dothraki Sea and the Khalasar is heading your way. They have found you wandering unannounced into their territory.", "S");
var roomFour   =   new Room("You are in Dorne. The Sand Vipers think you were invloved in Oberyn's death. Behind you is the desert and in front of you is escape via the sea.", "W");
var roomFive   =   new Room("You are at the Aerie. The only way out is either down through the Moon Door, or down the passageway to your side.", "N");

var game 	= 	new GameOfRooms();
game.addRooms([roomOne, roomTwo, roomThree, roomFour, roomFive]);
game.startGame();


