function cityalert (){
    alert("alert");
}
let citybutton = document.querySelectorAll('.city');
for( let i = 0; i < citybutton.length; i++){
    citybutton[i].addEventListener("click", cityalert);
}

function removeCookie(element){
    
}

/*let button = document.querySelector('.acceptbutton');
button.addEventListener("click", removeCookie);*/
