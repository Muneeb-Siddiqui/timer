var min=prompt("Enter time in minutes:") ;
var sec = prompt("Enter time in seconds:") ;
var msec = 10;
var mint = document.getElementById("min");
var secd = document.getElementById("sec");
var msecd = document.getElementById("msec");
var interval ;

function start(){
startbtn.disabled=true
pausebtn.disabled=false
resetbtn.disabled=false
interval=setInterval(timer,100)
}
function pause(){
startbtn.disabled=false
pausebtn.disabled=true
resetbtn.disabled=false
clearInterval(interval)
}
function reset(){
    min=00 ;
    sec = 00;
    msec = 00;
    msecd.innerHTML=msec;
    secd.innerHTML=sec;
    mint.innerHTML=min
    
startbtn.disabled=false
pausebtn.disabled=false
resetbtn.disabled=false
pause()
}
function timer(){
    msec--;
    msecd.innerHTML=msec;

    if(msec == 0){
        sec--;
        secd.innerHTML=sec;
        msec = 10;
        
            if(sec == 0){
                min--;
                sec = 59;
                mint.innerHTML=min
    
        
                
                if((min==0) && (sec==01 )){
                    msec=00;
                    msecd.innerHTML=msec;
                    pause()
                      }
                }
    }
}
