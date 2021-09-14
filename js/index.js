function cityalert (event){
    alert("Loading Weather Report");
}
let citybutton = document.querySelectorAll('.city');
for( let i = 0; i < citybutton.length; i++){
    citybutton[i].addEventListener("click", cityalert);
}

function removeCookie(){
    let cookie = document.querySelector('.block3')
    cookie.remove();
}

function degrees(){
    
}

/*let button = document.querySelector('.acceptbutton');
button.addEventListener("click", removeCookie);*/
