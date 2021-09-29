// Your code goes here

//here are the things that i want to change
//TEXT/Headers
const headLogo = document.querySelector('header.main-navigation h1.logo-heading')
const letsGo = document.querySelector('.content-section .text-content h2');

//NAV BUTTONS
const navItems = document.querySelectorAll('nav a');

//IMAGES
const busImg = document.querySelector('header.intro img');

//BUTTONS
const signUp = document.querySelectorAll('.btn');

//mouseover
letsGo.addEventListener('mouseover', evt => {
    evt.target.style.color = 'green';
})
letsGo.addEventListener('mouseout', evt =>{
    evt.target.style.color = 'black';
})

//keydown
const fullBody = document.querySelector('body');

let gKey = (evt) => {
    if (evt.key === 'g'){
        evt.target.style.backgroundColor = 'blue';
        evt.target.style.color = 'white'
    } else {
        console.log('try another key --- g');
    }
}
fullBody.addEventListener('keydown', gKey)


//resize
navItems.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.style.color = 'green';
    })
    btn.addEventListener('mouseout', () => {
        btn.style.color = 'black';
    })
})


// resize
busImg.addEventListener('onresize', (evt) =>{
    evt.target.style.height = '5px';
    debugger;
})


//drag and drop


// setatt.add()