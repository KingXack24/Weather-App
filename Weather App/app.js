

// var button = document.querySelector('.button');
// var inputValue = document.querySelector('.inputValue');
// var cityname = document.querySelector('.name');
// var desc = document.querySelector('.desc');
// var temp = document.querySelector('.temp');



// buttn.addEventListener('click', function() {


// fetch('https//api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=881258b684564b7c3e2ec78621e5fca7')
// .then(response => response.json())
// .then(data => {
// 	var nameValue = data['name'];
// 	var tempValue = data['main']['temp'];
// 	var desc = data['weather'][0]['description'];

// 	cityname.innerHTML = nameValue;
// 	temp.innerHTML = tempValue;
// 	desc.innerHTML = descValue;
// })



// .catch(err => "Wrong City Name!")


// })

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})