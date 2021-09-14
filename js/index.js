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
        for(let i = 0; i < selectdegrees.length; i++ ){
            let convert = (selectdegrees[i].innerHTML - 32) * 5 / 9;
            selectdegrees[i].innerHTML = Math.round(convert);
        }
        /*numberDegrees.innerHTML = "75°"
        numberDegrees2.innerHTML = "65°"*/
    }
    else{
        if(selectdegrees === "Celsius"){
            for(let i = 0; i < selectdegrees.length; i++ ){
                let convert = (selectdegrees[i].innerHTML * 9 / 5) + 32;
                selectdegrees[i].innerHTML = Math.round(convert);
            }
        }
    }
}

let numberDegrees = document.querySelectorAll('.gradered');
for( let i = 0; i < numberDegrees.length; i++){
    numberDegrees[i].addEventListener("onchange", degrees);
}
let numberDegrees2 = document.querySelectorAll('.gradeblue');
for( let i = 0; i < numberDegrees2.length; i++){
    numberDegrees2[i].addEventListener("onchange", degrees);
}

/*let button = document.querySelector('.acceptbutton');
button.addEventListener("click", removeCookie);

function celsiusToFahrenheit (temperature){
    return (temperature *9/5)+32;

    tempSection.addEventListener('click', function() {
            if(tempunit.textContent === "°C"){
                let fahrenheit = (celsiusToFahrenheit(feels_like-273)).toFixed(2);
                tempunit.textContent="F";
                tempvalue.textContent=fahrenheit;
            }else{
                tempunit.textContent="°C";
                tempvalue.textContent=(feels_like-273).toFixed(2);   
            }

*/

/*function deletecookies(){
    banner.remove()
}

let accept = document.querySelector('.acceptbutton')
let banner = document.querySelector('.banner')

accept.addEventListener("click", deletecookies)

//  Or


function deletecookies(){
    
    let prueba = accept.closest('.banner')
    prueba.remove()
}

let accept = document.querySelector('.acceptbutton')


accept.addEventListener("click", deletecookies)

function difTemp(event){
    let currentValue = event.target.value;

    if(currentValue === "Celsius"){
        console.log("Im in celsius");
        let tempValue = document.querySelectorAll('.temp');
        let convert
        for(let i=0; i<tempValue.length; i++){
            convert = (tempValue[i].innerHTML -32) *5/9;
            tempValue[i].innerHTML = Math.round(convert);
        }
        
    }

    else{
        if(currentValue === "Fahrenheit" ){
            console.log("Im in fahrenheit");
            let tempValue = document.querySelectorAll('.temp');
            let convert
            for(let i=0; i<tempValue.length; i++){
                convert = (tempValue[i].innerHTML * 9/5) + 32;
                tempValue[i].innerHTML = Math.round(convert);
        }
        } 
    }
}

let tempValue = document.querySelector('.selector');

tempValue.addEventListener('change', difTemp);


*/

