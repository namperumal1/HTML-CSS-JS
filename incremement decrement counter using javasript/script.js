let increment = document.querySelector(".incr");
let decrement = document.querySelector(".decr");
let number = document.querySelector(".number");
let reset = document.querySelector(".reset")
let count = 0;
increment.addEventListener('click', ()=>{
    count = count-1;
    number.innerHTML = count;
});
decrement.addEventListener('click', ()=>{
    count = count+1;
    number.innerHTML = count;
});
reset.addEventListener('click', ()=>{
    number.innerHTML = 0 ;
    count = 0;
})
