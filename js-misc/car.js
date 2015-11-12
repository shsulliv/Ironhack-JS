var Car = function (model, noise) {
	this.model = model;
	this.noise = noise;
	this.wheels = 4;
};

Car.prototype.makenoise = function () {
		console.log(this.noise);
	};

var fastCar = new Car("Ferrari", "VROOOOM!");


fastCar.makenoise();