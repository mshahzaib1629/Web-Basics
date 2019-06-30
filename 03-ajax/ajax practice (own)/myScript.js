


var xhttp = new XMLHttpRequest();

if(xhttp.readyState == 4 || xhttp.readyState == 0){

    xhttp.open("GET", 'testingFile.html', true);

    xhttp.onreadystatechange = funcOnReadyStateChange();

    xhttp.send();
}

function funcOnReadyStateChange(){
    if(xhttp.readyState == 1)
        document.getElementById('testingH2').innerHTML = xhttp.responseText;
}