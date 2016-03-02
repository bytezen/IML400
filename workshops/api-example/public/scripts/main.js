document.write("...javascript {main.js} loaded...");
console.log("...javascript {main.js} loaded...");


var SERVICE = "http://rhymebrain.com/talk?function=getRhymes";
var RHYMEBRAIN = "http://rhymebrain.com/talk";
var result = null;

/**
 button handlers

 these functions get called when the buttons get clicked

*/


//Clear the results 
function onClear() {
}


//Kick off the logic to get the user's entry, format it, submit it to the API
// get the results, parse the results and display the results, phew...
function onSubmit() {
    //get the word that the user entered
    var query = $('#query').val();
    console.log('querying ' + query);

    //pass the user's entry to a function that will format it to submit to the server
    var myRequest = formatQuery(query);

    //submit the request to the service
//     $.getJSON( myRequest,null,onJSONSuccess );
    $.getJSON( RHYMEBRAIN, myRequest).done(onJSONSuccess ).fail( function(){ console.log('no joy')});

    

}

function formatQuery( aQueryString ) {
    var req = {};
    req.function = 'getRhymes';
    req.word = encodeURIComponent(aQueryString);
    var qryParam = "word=" + encodeURIComponent(aQueryString);
    var request = SERVICE + '&' + qryParam;


    console.log('going to make the following request:');    
    console.log(req);
    return req;
}


/*
 * this function will get called automatically 
 * if the call to the service is successful
 * the data from the service will be passed back as
 * an argument
 */
function onJSONSuccess( payload ) {
    console.log("SUCCESS!!!")
    console.log(payload);
    result = payload;

    displayResults([result[0]]);
}


/*

var $divResult = $("<div><h3>"+ testResult.word + "</h3><span class='score'>" + testResult.score + " </span><span class='frequency'>" + testResult.freq + "</span>")

$('body').append($divResult)
*/

