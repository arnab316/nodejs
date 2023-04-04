// The clearTimeout() method clears a timer set with the setTimeout() method.


/*
let timer = setTimeout(()=>{
    console.log('hellow');
},3000);

clearTimeout(timer);
console.log('im First');
*/

//setInterval
/*
-- The setInterval() method calls a function at specified intervals (in milliseconds).
--  The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
1 second = 1000 milliseconds.*/

//setInterval(function () 
//{element.innerHTML += "Hello"}, 1000);
var count = 0;
intid = setInterval(counter, 1000)

function counter (){
    return element.innerHTML =+ count++;
}