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


function goFront() {
    goF = setInterval(function () {
        s++;
        if(s > 60)m++,s = 0;
        if(m > 60)h++,m = 0;
        var hh,mm,ss;
        if(s < 10)ss = "0"+s;
        else ss = JSON.stringify(s);
        if(m < 10)mm = "0"+m;
        else mm = JSON.stringify(m);
        if(h < 10)hh = "0"+h;
        else hh = JSON.stringify(h);

        document.getElementById("time").innerHTML = "Modo libre : "+hh+":"+mm+":"+ss;
    },1000);
    tm = true;
}

function goBack() {
    m = start;
    goB = setInterval(function () {
        if(s === 0){
            if(m === 0){
                if(h === 0) {
                    document.getElementById("time").innerHTML = "Modo contrareloj : 0"+h+":0"+m+":0"+s;
                    loseProtocol();
                    clearInterval(goB);
                }
                else h--,m=60;
            }else m--,s=60;
        }else s--;

        var hh,mm,ss;
        if(s < 10)ss = "0"+s;
        else ss = JSON.stringify(s);
        if(m < 10)mm = "0"+m;
        else mm = JSON.stringify(m);
        if(h < 10)hh = "0"+h;
        else hh = JSON.stringify(h);

        document.getElementById("time").innerHTML = "Modo contrareloj : "+hh+":"+mm+":"+ss;
    },1000);
    tm = true;
}

function restartTime(freeMode) {
    if (freeMode)h=0,m=0,s=0;
    else {
        stopTime(freeMode);
        goBack();
    }
}

function stopTime(freeMode) {
    if (freeMode)clearInterval(goF);
    else clearInterval(goB);
    tm = false;
}


