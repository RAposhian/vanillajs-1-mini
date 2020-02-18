console.log('Hello World!');


let count = 0;
let counterView = document.getElementById('counter');


function increase(){
   return counterView.innerText = count += 1;
}
// console.log(increase());

function decrease(){
   return counterView.innerText = count -= 1;
}

// console.log(decrease());

function reset() {
   return counterView.innerHTML = count = 0;
}
 
