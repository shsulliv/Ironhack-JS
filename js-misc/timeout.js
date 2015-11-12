
function blastOff(seconds) {
	var countDown = function() {
		if (seconds > 0) {
			console.log(seconds);
			seconds = seconds - 1;
			setTimeout(countDown, 1000);
		} else {
			console.log("Blast off!");
		};
	};
	setTimeout(countDown, 1000);
};

blastOff(5);
