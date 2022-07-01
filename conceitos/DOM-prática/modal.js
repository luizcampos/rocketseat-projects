const btnAbrirJanela = document.querySelector('#openModal');
const divHidden = document.querySelector('#divHidden');

btnAbrirJanela.addEventListener('click', function(){
    //btnAbrirJanela.style.visibility = 'hidden';
    divHidden.style.visibility = 'visible';
});


document.onkeydown = fecharDiv;

function fecharDiv(event){
    let keyPress = event.key;
    //console.log(typeof keyPress)
    if(keyPress === "Escape"){
        divHidden.style.visibility = "hidden";
    }
}