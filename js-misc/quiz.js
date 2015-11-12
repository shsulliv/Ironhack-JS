
var read = require('read');

var Question = function (text, answer, id) {
	this.text = text;
	this.answer = answer;
	this.id = id;
};

var QuizGame = function (user) {
	this.questions = [];
	this.questionNum = 0;
	this.points = 0;
	this.bonus = true;
	this.user = user;
};

var User = function (name) {
	this.name = name;
	// this.points = 0;
	this.currentQuestion = 0;

};

User.prototype.checkUser = function (callback) {
	var userStatus = { prompt: "New user? Type Y or N:" };
	read(userStatus, function(err, input) {
		if (err) { throw err; }
		if (input === "Y") {
			var login = { prompt: "Write your username to play:"};
			read(login, function(username) {
				var username = this.name;
				console.log("Welcome " + username + "! Let's play the quiz!");
				callback();
			})
		} else { callback(); }
	});
};

QuizGame.prototype.addQuestions = function (questions) {
	this.questions = questions;
};

QuizGame.prototype.addBonus = function () {
	var bonusQuestion =	new Question("Jon Snow was Eddard Stark's bastard son.", "N", "Bonus***");
	var randomNumber = Math.floor(Math.random()*11);
	if (randomNumber > 5 && this.bonus) {
		this.questions.push(bonusQuestion);
		this.startQuiz(); }
		else { console.log("GAME OVER"); }
	};

	QuizGame.prototype.keepPlaying = function () {
		this.questionNum += 1;
		if (this.questionNum >= this.questions.length) {
			this.addBonus();
			this.bonus = false; }
			else { this.startQuiz(); }
		};

		QuizGame.prototype.checkAnswer = function (choice) {
			if (choice === this.currentQues.answer) { this.points += 1; }
			console.log("Points: " + this.points + '\n');
			this.keepPlaying();
		};

		QuizGame.prototype.startQuiz = function () {
			this.currentQues = this.questions[this.questionNum];
			console.log("-----------QUIZ TIME!----------------\n");
			console.log("#" + this.currentQues.id + " " + this.currentQues.text + '\n');
			var options = { prompt: "Type either Y or N.\n>" };
			read(options, function (err, choice) {
				if (err) { throw err; }
				else { this.checkAnswer(choice); }
			}.bind(this));
		};

		var quesOne    =   new Question("Danaerys' brother Vasaerys was a true Dragon.", "N", 1);
		var quesTwo    =   new Question("Tyrion Lannister is the youngest member of his family.", "Y", 2);
		var quesThree  =   new Question("Tarth is known as the 'Saphire Isle.'", "Y", 3);
		var quesFour   =   new Question("Bravos was a colony of Old Valyria before the Doom.", "N", 4);
		var quesFive   =   new Question("King Tomin's pet cat is called Ser Pounce.", "Y", 5);

		var me = new User("Shannon");
		var game 	= 	new QuizGame(me);
		game.addQuestions([quesOne, quesTwo, quesThree, quesFour, quesFive]);
// game.startQuiz();
me.checkUser(game.startQuiz.bind(game))