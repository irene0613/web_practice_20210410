var i1 = 0;
var i2 = 0;
var v1 = Math.random() * 10;
var v2 = Math.random() * 10;

function move() {

    i1 += v1;
    i2 += v2;
    if (i1 > 800) v1 = -v1;
    if (i1 < 0) v1 = -v1;
    if (i2 > 800) v2 = -v2;
    if (i2 < 0) v2 = -v2;
    if (i1 > 795) {
        alert("1win!!");
        return;
    }
    if (i2 > 795) {
        alert("2win!!");
        return;
    }

    document.getElementById('t1').style.left = i1;
    document.getElementById('t2').style.left = i2;
}


window.setInterval("move()", 50);