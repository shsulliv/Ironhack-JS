'use strict';

var episodes = require('./episodes.JSON');

function fileactions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file)
    episodes.forEach(function(episode) {
		console.log("Title: " + episode.title + "  Episode: " + episode.episode_number);
		console.log(episode.description);
		function printStars(times) {
			var stars = '';
			for (var i = 0; i < times; i++) {
				stars += '*';
			}
			return stars;
		};
		function sortByRating(episode) {
			return episode.rating > 8.5;
		}
		console.log("Rating: " + episode.rating + " " + printStars(episode.rating));
		episodes.sort(function(a, b) {
    		return parseFloat(a.episode_number) - parseFloat(b.episode_number);
		});
		var filteredEpisodes = episodes.filter(sortByRating);
	});
}

module.exports = fileactions;