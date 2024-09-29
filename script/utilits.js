function hiddenElement(elementId){
    const homeScreen=document.getElementById(elementId);
    homeScreen.classList.add('hidden');
}

function showElement(elementId){
    const playScreen=document.getElementById(elementId);
    playScreen.classList.remove('hidden')
}


function setBgColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
    // console.log(element);

}

function removeBgColor(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('bg-[#FFA500]')
}


function getElementBYIdForScore(elementId){
    const element =document.getElementById(elementId);
    const elementText=element.innerText;
    const elementIntValue=parseInt(elementText);
    return elementIntValue;
}

function setElementByIdS(elementId,value){
    const element =document.getElementById(elementId);
    element.innerText=value;

}

function getTextElementById(elementId){
    const element=document.getElementById(elementId);
    const displayInnerText=element.innerText;
    return displayInnerText;
}
function playGround(){
    const ranDomWord='abcdefghijklmnopqrstuvwxyz';
    const stringWord=ranDomWord.split('');

    const randomWordGenerator=Math.random()*25;
    const wordFinal=Math.round(randomWordGenerator);
    
    const alphabet=stringWord[wordFinal];
    // console.log(wordFinal,alphabet);
    return alphabet;
}

