
var flag = 0;

document.addEventListener('DOMContentLoaded', function () {

    pinscheck();
    var pin = document.getElementById('add_pin_id');

    pin.addEventListener('click', function () {
        var container = document.getElementById('email');
        var warn = document.getElementById('warning');
        if (container.value == "") {
            
            warn.innerHTML="Valid Email required";
            warn.setAttribute('class', 'input_warn');

        } else {
            warn.innerHTML="";
            warn.removeAttribute('class');
            flag = 1;
            getURL(checkURL);
        }
    })
});



function addPin(i) {
    var pin = document.createElement('div');
    if (i % 2 == 0) {
        pin.className = 'pins1';
    } else {
        pin.className = 'pins2';
    }
    pin.innerHTML = temp + "\n\n  NOTIFY ON : " + document.getElementById('email').value;
    pinscheck();
    document.getElementById('container').appendChild(pin);
}
var temp;
var pins = new Array();
function getURL(callback) {

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        temp = tabs[0].url;
        callback();
    })
}
function checkURL() {
    var check = 0, i = 0;
    for (i; i < pins.length; i++) {
        console.log(pins.length);
        if (pins[i] === temp) {
            check = 1;
        }
    }

    if (check == 0) {
        console.log(temp);
        pins.push(temp);
        addPin(i);

    }
    var email = document.getElementById('email').value;
    console.log(email + temp);
    servercall(email, temp)
}


function servercall(email, temp) {

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            console.log(this.responseText);
        }
    }

    http.open("POST", "http://localhost:8000", true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify({ "email": email, "url": temp }));

}

function pinscheck() {
    var container = document.getElementById('container');
    if (flag == 0) {
        container.innerHTML = "No pins";
    } else {
        container.innerHTML = "";
    }
}