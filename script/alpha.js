
function gameStart(){
    const alphabet=playGround();

    const displayCurrentElement=document.getElementById('displayT')
    displayCurrentElement.innerText=alphabet;

    // keyboard color

    setBgColor(alphabet);
}




function play(){
 hiddenElement('homePlay');
 showElement('play-ground');
 gameStart();
}