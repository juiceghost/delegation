// Magic goes here ;)

const buttonOne = document.querySelector('button[value="1"]');
const buttonTwo = document.querySelector('button[value="2"]');
const buttonThree = document.querySelector('button[value="3"]');
const buttonFour = document.querySelector('button[value="4"]');

const resultScreen = document.querySelector('[type="text"]');

buttonOne.addEventListener('click', function (evt) {
    //console.log("one pressed")
})

const keypad = document.querySelector('.calculator-keys')

let calcArray = [];
let result;

keypad.addEventListener('click', function (e) {
    //console.log(e.target.tagName)
    // e.target.tagName == "DIV" om vi klickt på DIVen
    //          -- " --    "BUTTON"    -"-       BUtton
    // Målbild: om jag klickat på en DIV, gör ingenting
    // .. kommer jag vidare har jag alltså klickat på en knapp
    if (e.target.tagName === 'DIV') {
        return;
    }
    //console.log(e.target.value)

    /* switch (e.target.value) {
        case '1':
            console.log("1 detected")
            break;
        case '2':
            console.log("2 detected")
            break;
        default:
            console.log("you pressed something for which i have no case")

    } */

    if (e.target.className === "") { // numeric button pressed
        //console.log("Number button " + e.target.value + " pressed")
        //calcArray[calcArray.length - 1] += e.target.value;
        calcArray.push(e.target.value)
    } else if (e.target.className === "operator") {
        //console.log("Operator button " + e.target.value + " pressed")
        calcArray.push(e.target.value);
    } else if (e.target.className === "equal-sign operator") {
        //console.log("You pressed the equal sign, bro")
        result = calc(calcArray[1], calcArray[0], calcArray[2]);
        resultScreen.value = result;
    } else if (e.target.className === "decimal function") {
        //console.log("you pressed decimal")
    } else if (e.target.className === "all-clear function") {
        //console.log("you pressed ALL CLEAR")
        calcArray.splice(0, calcArray.length)
        resultScreen.value = "0";
    }
    console.log(calcArray)
    // när jag klickar på likhetstecknet vill jag att de senaste 3 händelserna
    // finns sparade någon stans. t.ex 1, +, 2
    // med denna information kan jag göra en beräkning


})

function addFunc(x, y) {
    return Number(x) + Number(y);
}

function subFunc(x, y) {
    return Number(x) - Number(y);
}

function multFunc(x, y) {
    return Number(x) * Number(y);
}

function divFunc(x, y) {
    return Number(x) / Number(y);
}

// calc('+', 1, 2)
function calc(op, a, b) {
    switch (op) {
        case '+':
            return addFunc(a, b); // addFunc(1, 2)
        case '-':
            return subFunc(a, b);
        case '*':
            return multFunc(a, b);
        case '/':
            return divFunc(a, b);
        default:
            console.log("You erred, bro")
            return null;
    }
}

