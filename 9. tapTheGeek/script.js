// setting level to Easy by having the duration of the whole animation to the maximum
// easy
function easy() {
    document.getElementById('circle').style.animationDuration = '20s';
    document.getElementById('circle').className = 'crcl';
}
// medium
function medium() {
    document.getElementById('circle').style.animationDuration = '15s';
    document.getElementById('circle').className = 'crcl';
}
// hard
function hard() {
    document.getElementById('circle').style.animationDuration = '12s';
    document.getElementById('circle').className = 'crcl';
}
let cnt = 0;
// function to count the number of taps and display the score
function count(){
    cnt = parseInt(1) + parseInt(cnt);
    var src = document.getElementById('score');
    src.innerHTML = cnt;
}
// restart
function restart(){
    window.location.reload();
}