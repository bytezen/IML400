$(document).ready(function() {
	var googleURI = 'https://maps.googleapis.com/maps/api/distancematrix/json';
	var bSendRequests = false;

	var $origin = $('#selOrigin');
	var $destination = $('#selDestination');
	var $result = $('.result');

	// make sure we have our jquery elements
	$origin && $destination && $result ? '' : console.error("Error finding elements") ;

	// setup a handler for the select
	$('select').change(onSelectChange);


	// --------

	function formatRequest(from, to) {
		// var encodedFrom = encodeURI(from);
		// var encodedTo = encodeURI(to);

		var reqObj = { 'origins' : from,
						'destinations' : to};

		console.log("making request....");
		$.getJSON( googleURI, reqObj, onGoogleResponse);

	}

	// --------
	// Handlers

	function onSelectChange(event) {		
		var from = $origin.find(':selected').val();
		var to = $destination.find(':selected').val();

		if(from === to) {
			console.log("Uh...you are already there dude");
		} else {
			console.log( from + " to " + to );
			formatRequest(from, to);
		}

		
	}

	function onGoogleResponse(data, status, jqXHR) {
		console.log("...request was a: " + status);	

		if(status === 'success') {
			if( data.rows !== null ) {
				if( data.rows[0].elements !== null ) {
					var res = data.rows[0].elements[0];
					$result.text('your trip is approximately ' + res.distance.text + ' long.');
					console.log('your trip is approximately ' + res.distance.text + ' long.');
				} else {
					console.error("There are no elements in the data result: " + data);
				}

			} else {
				console.error("There are no rows in the data result: " + data);
			}
			
		}
		
	}


	// =--=-=-=

});