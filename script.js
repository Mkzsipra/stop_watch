let milli = 0;
let sec = 0;
min = 0;
let hr = 0;

let timer = false;

function start() {
	timer = true;
    timerStartFn()
}
function stop(){
    timer = false;
    timerStartFn()
}
function rest(){
    location.reload();
}

function timerStartFn(){
    if(timer == true){
        if(milli == 100){
            sec++;
            milli = 0;
        }
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hr++;
            min = 0;
        }
        milli++;
        let getSec = sec;
        let getMin = min;
        let getHr = hr;
        if(sec < 10){
            getSec = "0" +sec
        }
        if(min < 10){
            getMin = "0" +min
        }
        if(hr < 10){
            getHr = "0" +hr
        }
        setTimeout("timerStartFn()", 10);
        document.getElementById('milli').innerHTML = milli
        document.getElementById('sec').innerHTML = getSec
        document.getElementById('min').innerHTML = getMin
        document.getElementById('hr').innerHTML = getHr
        
    }
}