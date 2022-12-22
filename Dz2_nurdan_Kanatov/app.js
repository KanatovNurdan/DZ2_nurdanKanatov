const small = document.querySelector('.small')
let circle = {
    raduis: 300,
    speed: 10
}

let a = 0 
let b = 2 * Math.PI / 180 
let second = 0 
let start = false 

function animateCircle() {
    start =true 
    a+=b 
    small.style.left = 250 + circle.raduis * Math.sin(a) + 'px'
    small.style.top = 250 +circle.raduis * Math.cos(a) + 'px'
    setTimeout(animateCircle,circle.speed)
}
animateCircle()

setInnterval(()=>{
    if (sec<= 60 && start === true){
        sec++
        console.log(sec);
    }
})