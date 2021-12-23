// First Example: Sum numbers 

const calculateSumButtonElement = document.getElementById('sum-button');

function calculateSum(){
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++){
        sumUpToNumber = sumUpToNumber + i; 

    }

    const outputResultElement = document.getElementById('calculated-sum')

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';

}



calculateSumButtonElement.addEventListener('click', calculateSum)


// highlight links 




const highlightLinkButton = document.querySelector('#highlight-links button');

function highlightLinks(){
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');

    }
} 

highlightLinkButton.addEventListener('click', highlightLinks);



// Display user data

const dummyUserData = {
    firstName: 'jacques',
    lasName: 'Drumond',
    age: 19

};


const userDataButton = document.querySelector('#user-data button');

function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data');


    outputDataElement.innerHTML = '';

    for (const propertyName in dummyUserData){
        const newUserdataList = document.createElement('li')
        const outputText = propertyName.toUpperCase() + ': ' + dummyUserData[propertyName];
        newUserdataList.textContent = outputText;
        outputDataElement.append(newUserdataList);

    }

}

userDataButton.addEventListener('click', displayUserData);



// Statistics / Roll the dice 


const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice(){
    return Math.floor(Math.random() * 6) + 1; // Math.floor(): 3.53 => 3
}



function deriveNumberOfDiceRolls(){
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');   
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber){
       const rolledNumber =  rollDice();

    //    if (rolledNumber == enteredNumber ){
    //        hasRolledTargetNumber = true;
    //    }

    numberOfRolls++; 
    const newRollListElement = document.createElement('li')  
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListElement.textContent = outputText;
    diceRollsListElement.append(newRollListElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;

    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;

}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls)