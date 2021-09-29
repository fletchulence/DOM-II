// Your code goes here

//here are the things that i want to change
//TEXT/Headers
const headLogo = document.querySelector('header.main-navigation h1.logo-heading')
const letsGo = document.querySelector('.content-section .text-content h2');

//NAV BUTTONS
const navItems = document.querySelectorAll('nav a');

//IMAGES
const busImg = document.querySelector('header.intro img');

//destinations
const destinationTopic = document.querySelectorAll('.destination h4');

//mouseover
letsGo.addEventListener('mouseover', evt => {
    evt.target.style.color = 'green';
})
letsGo.addEventListener('mouseout', evt =>{
    evt.target.style.color = 'black';
})

//keydown
const fullBody = document.querySelector('body');
const gKey = (evt) => {
    if (evt.key === 'g'){
        evt.target.style.backgroundColor = 'blue';
        evt.target.style.color = 'white'
    } else {
        console.log('try another key --- g');
    }
}
fullBody.addEventListener('keydown', gKey)


//mouseover forEach
navItems.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.style.color = 'green';
    })
    btn.addEventListener('mouseout', () => {
        btn.style.color = 'black';
    })
})


// resize??
// busImg.addEventListener('resize', (evt) =>{
//     window.onresize = () =>{ evt.target.height = '100%' };
// })



//select


// destinationTopic.addEventListener('select', (evt) => {
//     //const selectPar = document.querySelector('.btn');
//     evt.preventDefault();
//     evt.target.selectionStart, evt.target.selectionEnd;
// })


//drag and drop


// setAttribute.add('id=')



let newInput = document.createElement('input');
newInput.setAttribute("style", "display: inline; whiteSpace: nowrap");
newInput.innerHTML = '<input type="text" placeholder= "search something" >';
document.querySelector('.nav-container').appendChild(newInput);

const search = document.querySelector('input[type="text"]');

search.addEventListener('focus', (evt) => {
    evt.target.style.backgroundColor = 'pink';
});
search.addEventListener('blur', (evt) => {
    evt.target.style.background = '';
})