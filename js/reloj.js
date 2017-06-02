/**
 * Created by calamarte on 28/05/2017.
 */
var h = 0;
var m = 0;
var s = 0;
var goF;
var goB;
var start = 3;
var tm = false;
var tiempoFinal;


function goFront() {
    if(tm)stopTime(freeMode);
    goF = setInterval(function () {
            s++;
            if (s > 60) m++, s = 0;
            if (m > 60) h++, m = 0;

            document.getElementById("time").innerHTML = "Modo libre : "+timeToString();
        }, 1000);
    tm = true;
}

function goBack() {
    if(tm)stopTime(freeMode);
    m = start;
        goB = setInterval(function () {
            if (s === 0) {
                if (m === 0) {
                    if (h === 0) {
                        document.getElementById("time").innerHTML = "Modo contrareloj : 0" + h + ":0" + m + ":0" + s;
                        loseProtocol();
                        clearInterval(goB);
                    }
                    else h--, m = 59;
                } else m--, s = 59;
            } else s--;

            document.getElementById("time").innerHTML = "Modo contrareloj : " + timeToString();
        }, 1000);
    tm = true;
}


function stopTime(freeMode) {
    if(tm) {
        tiempoFinal = timeToString();
        h=0,m=0,s=0;
        if (freeMode) clearInterval(goF);
        else clearInterval(goB);
        tm = false;
    }
}

function timeToString() {
    var hh, mm, ss;
    if (s < 10) ss = "0" + s;
    else ss = JSON.stringify(s);
    if (m < 10) mm = "0" + m;
    else mm = JSON.stringify(m);
    if (h < 10) hh = "0" + h;
    else hh = JSON.stringify(h);

    return hh + ":" + mm + ":" + ss;
}


