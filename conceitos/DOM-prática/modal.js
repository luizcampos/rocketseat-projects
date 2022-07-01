const btnAbrirJanela = document.querySelector('#openModal');
const divHidden = document.querySelector('#divHidden');

btnAbrirJanela.addEventListener('click', function(){
    //btnAbrirJanela.style.visibility = 'hidden';
    divHidden.style.visibility = 'visible';
});


document.addEventListener('keydown', function(event){
    let keyPress = event.key;
    if(keyPress === "Escape"){
        divHidden.style.visibility = "hidden";
    }
})