
// function gameStart(){
//     const alphabet=playGround();

//     const displayCurrentElement=document.getElementById('displayT')
//     displayCurrentElement.innerText=alphabet;

//     // keyboard color

//     setBgColor(alphabet);
// }


// function keyboardHandelar(event){
//     const playerPressed=event.key;
//      const alphabetL=playGround();
//      console.log('alphabet',alphabetL);
//      console.log(playerPressed);
//     const currentElement=document.getElementById('displayT');
//     const currentAlphabet=currentElement.innerText;
//     const expectedAlphabet=currentAlphabet.toLowerCase();

    


    
 
    
// // update a score
//     // const currentSElement=document.getElementById('currentsScore');
//     // const currentinnerText=currentSElement.innerText;
//     // const currentIntValue=parseInt(currentinnerText);

//     // // new score added
//     // const newScore=currentIntValue +1;
//     // currentSElement.innerText=newScore;

    


//     if(playerPressed===expectedAlphabet){
//         const currentElementValue=getElementBYIdForScore('currentsScore');
//         const updateScore=currentElementValue +1;
//         setElementByIdS('currentsScore',updateScore);

//     }
//     else{
//     const currentelementLifeupdate=getElementBYIdForScore('lifeUpdate');
//     const lifeUpdateT=currentelementLifeupdate -1;
//     setElementByIdS('lifeUpdate',lifeUpdateT);
//     }




//     // life update

//     // const lifeUpdateelement=document.getElementById('lifeUpdate');
//     // const lifeUpdateT=lifeUpdateelement.innerText;
//     // const lifeUpdateInt=parseInt(lifeUpdateT);

//     // const newLife=lifeUpdateInt -1;
//     // lifeUpdateelement.innerText=newLife;

//     removeBgColor(expectedAlphabet);
//      gameStart();

// }



//     document.addEventListener('keyup',keyboardHandelar);






// function play(){
//  hiddenElement('homePlay');
//  hiddenElement('Finalscore')
//  showElement('play-ground');
//  gameStart();
//  setElementByIdS('lifeUpdate', 5);
//  setElementByIdS('currentsScore', 0);
 
// }

// function gameOver(){
//     hiddenElement('play-ground');
//     showElement('Finalscore');

//     const lastScore=document.getElementById('currentsScore')
//     setElementByIdS('currentsScore',lastScore);
//     // console.log(lastScore);
// }

// random key genaret with  showing the display

function keyboardHandelar(event){
    const keyboardPressed=event.key;
    // key player to expectet to pressed

    const currentAlphabetelement=document.getElementById('displayT');
    const currentinnerText=currentAlphabetelement.innerText;
    const expectedAlphabet=currentinnerText.toLowerCase();

    // check the value either point or not

    if(keyboardPressed===expectedAlphabet){
        // score update

        const scoreUpdate=document.getElementById('currentsScore');
        const scoreDisply=scoreUpdate.innerText;
        const numberConvert=parseInt(scoreDisply);
        // update new score

        const newScoreUpadet=numberConvert +1;
        // show the score in the display

        scoreUpdate.innerText=newScoreUpadet;


        // life update
       



        removeBgColor(expectedAlphabet);
        gameStart();
    }
    
    else {
        const lifeUpdateelement = document.getElementById('lifeUpdate');
        const lifeUpdateT = lifeUpdateelement.innerText;
        const lifeUpdateInt = parseInt(lifeUpdateT);
        const newLife = lifeUpdateInt - 1;
        lifeUpdateelement.innerText = newLife;

        if (newLife == 0) {
            gameOver();
        }

    }

}



document.addEventListener('keyup',keyboardHandelar);

function gameStart(){
    // genaret the current alphabet
    const alphabet=playGround();

    //set randomly alphabet in display
    const currentAlphabetelement=document.getElementById('displayT');
    currentAlphabetelement.innerText=alphabet;
    // set backGround color
console.log(alphabet)
    setBgColor(alphabet)
}
function play(){
    // hidden and showing all function
    hiddenElement('homePlay');
    hiddenElement('Finalscore');
    showElement('play-ground')

    // set the score and life

    setElementByIdS('lifeUpdate',5);
    setElementByIdS('currentsScore',0);
    // game start loooing
    gameStart();
}

function gameOver() {
    hiddenElement('play-ground');
    showElement('Finalscore');

    // set the final score in the display
    const setFinalscore=getElementBYIdForScore('currentsScore');
    setElementByIdS('LastGmaeScore',setFinalscore);
    // remove the highlighter in the keyborad when the game over and back again
    const currentAlphabetD=getTextElementById('displayT');
    removeBgColor(currentAlphabetD);

}


