let   input = document.querySelector('.input_text');
let  main = document.querySelector('#name');
let  temp = document.querySelector('.temp');
let  desc = document.querySelector('.desc');
let  clouds = document.querySelector('.clouds');
let  button= document.getElementById('btn');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=7713d82065576fe77290517005e81e13')
.then(response => response.json())
.then(data => {
  let tempValue = data['main']['temp'];
 let nameValue = data['name'];
  let descValue = data['weather'][0]['description'];
  tempValue =  parseInt(tempValue - 273.15);

  main.innerHTML = nameValue;
 desc.innerHTML = "Weather Status - " + descValue;
 temp.innerHTML = "Temperature"  + tempValue + '&#8451'  ;
 input.value ="";

})

.catch(err => alert("Wrong city name!" ));
});




