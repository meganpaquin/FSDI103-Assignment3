let answer = document.getElementById("answer");
let user_numberone = prompt("Enter a number");
let numberone_validator = parseFloat(Math.round(user_numberone));
//check that the user entered a number value
while(isNaN(numberone_validator)){
    user_numberone = prompt("Error: please enter a number");
    numberone_validator = parseFloat(Math.round(user_numberone));
}
let user_numbertwo = prompt("Enter a second number");
let numbertwo_validator = parseFloat(Math.round(user_numbertwo));
//check that the user entered a number value
while(isNaN(numbertwo_validator)){
    user_numbertwo = prompt("Error: please enter a number");
    numbertwo_validator = parseFloat(Math.round(user_numbertwo));
}

    //do the math
    let mulitplication = user_numberone*user_numbertwo;
    let division = user_numberone/user_numbertwo;
    let addition = parseFloat(user_numberone)+parseFloat(user_numbertwo);
    let subtraction = user_numberone-user_numbertwo;

    //display the answer when the button is clicked
    function plusclick(){
        answer.innerHTML = `${user_numberone} + ${user_numbertwo} = ${addition}`;
    }

    function minusclick(){
        answer.innerHTML = `${user_numberone} - ${user_numbertwo} = ${subtraction}`;
    }

    function multiplyclick(){
        answer.innerHTML = `${user_numberone} x ${user_numbertwo} = ${mulitplication}`;
    }

    function divideclick(){
        answer.innerHTML = `${user_numberone} / ${user_numbertwo} = ${division}`;
    }

