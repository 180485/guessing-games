

let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");
  




let number = [Math.floor(Math.random()* 23)]

btn.addEventListener('click', function(){
    
     let input = document.getElementById("input").value;
   
    if(input == number){
        output.innerHTML = ` you guessed right ,your number was ${number}`;
    
}else if (input < number){
    output.innerHTML = "you guessed too low";

}
else {
    output.innerHTML = "you guessed too high"
}

})
console.log (number);