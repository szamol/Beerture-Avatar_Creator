let arrowLeft = document.querySelector("[class='switch_left']");
let arrowRight = document.querySelector("[class='switch_right']");
let headButton = document.getElementById('headButton');
let hairButton = document.getElementById('hairButton');
let eyesButton = document.getElementById('eyesButton');
let earsButton = document.getElementById('earsButton');
let noseButton = document.getElementById('noseButton');
let lipsButton = document.getElementById('lipsButton');
let shirtButton = document.getElementById('shirtButton');

//made to read the actual quantity of elements of choosen property
let arrayOfProperty = [];

let property = null;

//flag, used to hide other properties
let isFirst = false;

//taking care of updating memory of current element position
let memory = [];

const updatingMemory = selected => {

    for (let index = 0; index < arrayOfProperty.length; index++) {
        memory[index] = $('#' + selected + (index+1)).attr('src');
    }
}

const switchingRight = selected => {

    updatingMemory(property);

    for (let index = 0; index < arrayOfProperty.length; index++) {
        if(index === 0) {
            $('#' + selected + (index+1)).attr('src', memory[arrayOfProperty.length-1]);
        }
        else {
            $('#' + selected + (index+1)).attr('src', memory[index-1]);
        }
        
    }
    memory = [];
}

const switchingLeft = selected => {

    updatingMemory(property);

    for (let index = 0; index < arrayOfProperty.length; index++) {
        if(index === (arrayOfProperty.length-1)) {
            $('#' + selected + (index+1)).attr('src', memory[0]);
        }
        else {
            $('#' + selected + (index+1)).attr('src', memory[index+1]);
        }
        
    }
    memory = [];
}

//function which hides unnecessary properties
const hidePrevious = previousProperty => {
    $('.' + previousProperty + '_back').css('visibility', 'hidden');
}

//a variable to remember previous property, which was used
let previousRecord;

//choosing and showing desired property
const selectProperty = element => {

    $('.' + element.target.innerHTML.toLowerCase() + '_back').css('visibility', 'visible');
    $('#propertyLabel').html(element.target.innerHTML);

    property = element.target.innerHTML.toLowerCase();

    arrayOfProperty = document.getElementsByClassName(element.target.innerHTML.toLowerCase());

    //hiding unnecessary elements
    for (let index = 0; index < arrayOfProperty.length; index++) {
        if(index > 1 && index != (arrayOfProperty.length-1))
            $('#' + property + (index+1)).hide();
    }
            
    if(isFirst == true && previousRecord !== element.target.innerHTML.toLowerCase())
    hidePrevious(previousRecord);                           //calling hiding function

    isFirst = true;

    previousRecord = element.target.innerHTML.toLowerCase();
}


arrowLeft.addEventListener("click", () => { switchingLeft(property) }, false);
arrowRight.addEventListener("click", () => { switchingRight(property) }, false);
// headButton.addEventListener("click", )   to be added
// hairButton                               to be added
eyesButton.addEventListener("click", selectProperty, false);
// earsButton                               to be added
// noseButton                               to be added
// lipsButton                               to be added
shirtButton.addEventListener("click", selectProperty, false);
