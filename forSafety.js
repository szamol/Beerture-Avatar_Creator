let arrowLeft = document.querySelector("[class='switch_left']");
let arrowRight = document.querySelector("[class='switch_right']");
let headButton = document.getElementById('headButton');
let hairButton = document.getElementById('hairButton');
let eyesButton = document.getElementById('eyesButton');
let earsButton = document.getElementById('earsButton');
let noseButton = document.getElementById('noseButton');
let lipsButton = document.getElementById('lipsButton');
let shirtButton = document.getElementById('shirtButton');
let shirts = document.getElementsByClassName('shirt');

console.log($('#shirtLabel').html().toLowerCase());

const choosingElement = element => {
    //hiding unnecessary elements
    for (let index = 0; index < shirts.length; index++) {
        if(index > 1 && index != (shirts.length-1))
            $('#shirt' + (index+1)).hide();
    }

    //function which takes care of updating memory
    let memory = [];

    const updatingShirtsMemory = () => {

        for (let index = 0; index < shirts.length; index++) {
            memory[index] = $('#shirt' + (index+1)).attr('src');
        }
    }

    const switchingLeft = () => {

        updatingShirtsMemory();

        for (let index = 0; index < shirts.length; index++) {
            if(index === 0) {
                $('#shirt' + (index+1)).attr('src', memory[shirts.length-1]);
            }
            else {
                $('#shirt' + (index+1)).attr('src', memory[index-1]);
            }
            
        }
        memory = [];
    }

    const switchingRight = () => {

        updatingShirtsMemory();

        for (let index = 0; index < shirts.length; index++) {
            if(index === (shirts.length-1)) {
                $('#shirt' + (index+1)).attr('src', memory[0]);
            }
            else {
                $('#shirt' + (index+1)).attr('src', memory[index+1]);
            }
            
        }
        memory = [];
    }
}


arrowLeft.addEventListener("click", () => { switchingLeft() }, false);
arrowRight.addEventListener("click", () => { switchingRight() }, false);
headButton.addEventListener("click", )
// hairButton
// eyesButton
// earsButton
// noseButton
// lipsButton
shirtButton.addEventListener("click", () => { choosingElement($('#shirtButton').html().toLowerCase()) }, false);
