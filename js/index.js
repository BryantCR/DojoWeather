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

function degrees(element){
    let selectdegrees = element.value/*document.querySelectorAll('.selector').value;*/
    console.log(selectdegrees)
    if(selectdegrees === "Fahrenheit"){
        console.log("AHHHHH")
        numberDegrees.innerHTML = "75°"
        numberDegrees2.innerHTML = "65°"
    }
    else{
        if(selectdegrees === "Celsius"){
            console.log("OHHHHH")
            numberDegrees.innerHTML = "24°"
            numberDegrees2.innerHTML = "18°"
        }
    }
}

let numberDegrees = document.querySelector('.gradered');
for( let i = 0; i < numberDegrees.length; i++){
    numberDegrees[i].addEventListener("onchange", degrees);
}
let numberDegrees2 = document.querySelector('.gradeblue');
for( let i = 0; i < numberDegrees2.length; i++){
    numberDegrees2[i].addEventListener("onchange", degrees);
}

/*let button = document.querySelector('.acceptbutton');
button.addEventListener("click", removeCookie);*/
