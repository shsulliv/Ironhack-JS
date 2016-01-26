$(document).ready(function() {

	function searchSpotify () {
		var $term = $('input[name=query]').val();
		var requestURL = `https://api.spotify.com/v1/search?q=${$term}&type=track`;
		$.get(requestURL)
			.done(function(result) {
				spotifyTracks(result);
				$('input[name=query]').val('');
			})
			.fail(function(jqXHR, status) {
				console.log(status);
			});
	}

	function spotifyTracks (result) {
		var trackList = result.tracks.items;
		$('#results').empty();
		trackList.forEach(function (track) {
			var name = `
			<li>
				<a data-track-id=${track.id} href="#" class="track-link">
					${track.name}
				</a>
			</li>`;
			$('#results').append(name);
		});
		$('#results').toggleClass('empty', false);
	}

	$('#Search').on('submit', function(event) {
		event.preventDefault();
		searchSpotify();
	});

	$('#results').on('click', '.track-link', function(event) {
		event.preventDefault();
		var $target = $(event.target);
		var id = $target.data('track-id');
		var trackURL = `https://api.spotify.com/v1/tracks/${id}`;

		$.get(trackURL).done(function(track) {
			loadTrack(track);
		})
	});

	function loadTrack (track) {
		var title = track.album.name;
		var artist = track.artists[0].name;
		var cover = track.album.images[0].url;
		var sample = track.preview_url;

		$('p.title').html(title);
		$('p.author').html(artist);
		$('div.cover').children().attr('src', cover);
		$('#audio').attr('src', sample);
	}

	$('div.btn-play').on('click', function (event) {
		event.preventDefault();

		if ($(this).hasClass('disabled')) {
			$(this).removeClass('disabled').addClass('playing');
			$('#audio').trigger('play');
		} else {
			$(this).removeClass('playing').addClass('disabled');
			$('#audio').trigger('pause');
		}

		$('#audio').on('timeupdate', function() {
    	$('div.seekbar').children().attr("value", this.currentTime);
		});
	});

});

