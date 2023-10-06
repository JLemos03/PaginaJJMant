const img= document.getElementById(`imagen-rebotante`);
const phone= document.getElementById(`reboundPhone`);
const email= document.getElementById(`reboundEmail`);

img.addEventListener(`mouseenter`, () =>{
    img.style.animation = "bounce 1.5s ease infinite"
});

img.addEventListener(`mouseleave`, () =>{
    img.style.animation = "none"
})


phone.addEventListener(`mouseenter`, ()=>{
    phone.style.animation = "bounce 1.5s ease infinite"
})

phone.addEventListener(`mouseleave`, () =>{
    phone.style.animation = "none"
})

email.addEventListener(`mouseenter`, ()=>{
    email.style.animation = "bounce 1.5s ease infinite"
})

email.addEventListener(`mouseleave`, () =>{
    email.style.animation = "none"
})