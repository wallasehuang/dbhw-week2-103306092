var is_start = false;


function minus() {
    if (document.getElementById("num")) {
        var curr = parseInt(document.getElementById("num").innerHTML);
    }

    if (curr && curr <= 60 && is_start == true) {
        if (curr <= 10) {
            num.style.color = "#EF233C";
            document.getElementById("num").innerHTML = "0" + (curr - 1);


        } else {
            document.getElementById("num").innerHTML = curr - 1;
        }
    } else if (curr == 0) {
        num.style.color = "#8D99AE";
        document.getElementById("num").innerHTML = 60;
    }

    setTimeout(function() {
        minus();
    }, 1000);


};
minus();

function start() {
    is_start = true;
}

function stop() {
    is_start = false;
}


window.onload = function() {
    start.style = "#08090d";
}
