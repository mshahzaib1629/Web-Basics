//creating new http request
var xhttp = new XMLHttpRequest();

// If our XmlHttpRequest object is not in the middle of a request,
// start the new asyncronous call.
if (xhttp.readyState == 0 || xhttp.readyState == 4) {

    // Setup the connection as a GET call to our file
    xhttp.open("GET", "person.json", true);

    console.log('connecting......');

    // defining function that shoud be called everytime whenever readyState is changed
    xhttp.onreadystatechange = function () {

        console.log('state Changed, current state: ' + xhttp.readyState);

        // check if request is completed successfully
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            //just printing the received text from targeted file
            console.log(xhttp.responseText);

            // calling this method for displaying results on HTML screen

            updateUI(xhttp.responseText);
        }
    }

    // send the HTTP request if above condition (request completion) is not complete OR if request is not Sent yet
    xhttp.send();
}

function updateUI(responseText) {

    // parsing the response received from JSON formated file into JavaScript format 
    var response = JSON.parse(responseText);

    // selecting the people object from the response received from the JSON file
    var personArray = response.fazals;
    var person = '';

    for (var i = 0; i < personArray.length; i++) {

        // creating an array list of person (with html element) to be displayed on front
        person += '<li>' + personArray[i].name + '</li>';
    }

    // finally print the list
    document.getElementById('myList').innerHTML = person;
}