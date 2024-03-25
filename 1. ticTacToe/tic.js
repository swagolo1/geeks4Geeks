// Function called whenever user tab on any box
function myfunc(){
    // Setting DOM to all boxes or input field
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
    b1btn = document.getElementById("b1");
    b2btn = document.getElementById("b2");
    b3btn = document.getElementById("b3");
    b4btn = document.getElementById("b4");
    b5btn = document.getElementById("b5");
    b6btn = document.getElementById("b6");
    b7btn = document.getElementById("b7");
    b8btn = document.getElementById("b8");
    b9btn = document.getElementById("b9");

    // Check if Player X won or not
    // if yes, disabled all other fields + color red the winner line
    // 1. Checking top line
    if ((b1 =='X') && (b2 == 'X') && (b3 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    }
    // 2. Checking middle line
    else if ((b4 =='X') && (b5 == 'X') && (b6 == 'X')){

        document.getElementById('print').innerHTML = "Player X won";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    }
    // 3. Checking bottom line
    else if ((b7 =='X') && (b8 == 'X') && (b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }

    // 4. Checking 1st diagonal line
    else if ((b1 =='X') && (b5 == 'X') && (b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
    }

    // 5. Checking 2nd diagonal line
    else if ((b3 =='X') && (b5 == 'X') && (b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    }

    // 6. Checking 1st column
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }

    // 7. Checking 2nd column
    else if ((b2 =='X') && (b5 == 'X') && (b8 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }

    // 8. Checking 3rd column
    else if ((b3 =='X') && (b6 == 'X') && (b9 == 'X')){
        document.getElementById('print').innerHTML = "Player X won";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    }

    // Check if Player X finish
    // Check if Player 0 starts
    // if yes, disabled all other fields + color red the winner line
    // 1. Checking top line
    else if ((b1 =='0') && (b2 == '0') && (b3 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    }
    // 2. Checking middle line
    else if ((b4 =='0') && (b5 == '0') && (b6 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    }
    // 3. Checking bottom line
    else if ((b7 =='0') && (b8 == '0') && (b9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }

    // 4. Checking 1st diagonal line
    else if ((b1 =='0') && (b4 == '0') && (b7 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }

    // 5. Checking 2nd diagonal line
    else if ((b3 =='0') && (b5 == '0') && (b7 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    }

    // 6. Checking 1st column
    else if ((b1 =='0') && (b4 == '0') && (b7 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }

    // 7. Checking 2nd column
    else if ((b2 =='0') && (b5 == '0') && (b8 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }

    // 8. Checking 3rd column
    else if ((b3 =='0') && (b6 == '0') && (b9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    }

    //Checking of Player 0 finish
    //Checking if Tie

    else if ((b1 == 'X' || b1 == '0')
        && (b2 == 'X' || b2 == '0')
        && (b3 == 'X' || b3 == '0')
        && (b4 == 'X' || b4 == '0')
        && (b5 == 'X' || b5 == '0')
        && (b6 == 'X' || b6 == '0')
        && (b7 == 'X' || b7 == '0')
        && (b8 == 'X' || b8 == '0')
        && (b9 == 'X' || b9 == '0') ){
            document.getElementById('print').innerHTML = "Match Tie";
    }else{
        //printing result
        if (flag == 1){
            document.getElementById('print').innerHTML = "Player X Turn";
        }else{
            document.getElementById('print').innerHTML = "Player 0 Turn";
        }
    }
}

//Reset game
function myfunc_2(){
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

//Checking the turn of the player + adding value of X/0
var flag = 1;

//Checking b1
function myfunc_3(){
    if (flag == 1){
        document.getElementById('b1').value = 'X';
        document.getElementById('b1').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b1').value = '0';
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}

//Checking b2
function myfunc_4(){
    if (flag == 1){
        document.getElementById('b2').value = 'X';
        document.getElementById('b2').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b2').value = '0';
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}

//Checking b3
function myfunc_5(){
    if (flag == 1){
        document.getElementById('b3').value = 'X';
        document.getElementById('b3').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b3').value = '0';
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}

//Checking b4
function myfunc_6(){
    if (flag == 1){
        document.getElementById('b4').value = 'X';
        document.getElementById('b4').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b4').value = '0';
        document.getElementById('b4').disabled = true;
        flag = 1;
    }
}

//Checking b5
function myfunc_7(){
    if (flag == 1){
        document.getElementById('b5').value = 'X';
        document.getElementById('b5').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b5').value = '0';
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}

//Checking b6
function myfunc_8(){
    if (flag == 1){
        document.getElementById('b6').value = 'X';
        document.getElementById('b6').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b6').value = '0';
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}

//Checking b7
function myfunc_9(){
    if (flag == 1){
        document.getElementById('b7').value = 'X';
        document.getElementById('b7').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b7').value = '0';
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}

//Checking b8
function myfunc_10(){
    if (flag == 1){
        document.getElementById('b8').value = 'X';
        document.getElementById('b8').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b8').value = '0';
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}

//Checking b9
function myfunc_11(){
    if (flag == 1){
        document.getElementById('b9').value = 'X';
        document.getElementById('b9').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b9').value = '0';
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
}

//Pick random color
function pickColor(){
   
    //Generating color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    //getting the cellColor location
    var r = document.querySelector(':root');

    //setting the color
    r.style.setProperty('--cellColor', randomColor);

 
}