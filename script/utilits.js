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
    console.log(element);

}

function playGround(){
    const ranDomWord='abcdefghijklmnopqrstuvwxyz';
    const stringWord=ranDomWord.split('');

    const randomWordGenerator=Math.random()*25;
    const wordFinal=Math.round(randomWordGenerator);
    
    const alphabet=stringWord[wordFinal];
    console.log(wordFinal,alphabet);
    return alphabet;
}

