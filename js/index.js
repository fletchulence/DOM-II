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
headLogo.addEventListener('mouseover', evt => {
    evt.target.style.color = 'green';
})
headLogo.addEventListener('mouseout', evt =>{
    evt.target.style.color = 'black';
})

//keydown
const fullBody = document.querySelector('body');
const gKey = (evt) => {
    if (evt.key === 'g'){
        evt.target.style.backgroundColor = 'blue';
        evt.target.style.color = 'white';
    } else {
        console.log("try another key --- hint: it's g");
    }}
const escKey = (evt) => {
    if (evt.target.style.backgroundColor === 'blue' && evt.key === "Escape"){
        evt.target.style.backgroundColor = "white";
        evt.target.style.color = "black";
    } else {console.log('hit escape to go back')}
}
fullBody.addEventListener('keydown', gKey)
fullBody.addEventListener('keydown', escKey)


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






/////drag and drop


// setAttribute.add('id=')


// ! focus & blur text input -- had to create input.. dont know why it wouldnt work

let newInput = document.createElement('input');
newInput.setAttribute("type", "text");  
newInput.setAttribute("style","display: inline; whiteSpace: nowrap");
newInput.setAttribute("value", "try selecting this")
// newInput.innerHTML = '<input type="text" placeholder= "search something" >';
document.querySelector('.nav-container').appendChild(newInput);

const search = document.querySelector('input[type="text"]');

search.addEventListener('focus', (evt) => {
    evt.target.style.backgroundColor = 'pink';
});
search.addEventListener('blur', (evt) => {
    evt.target.style.backgroundColor = '';
})

let newPar = document.createElement('p')
newPar.setAttribute("id",  "log")
newPar.setAttribute('style', 'display: flex; flex-wrap: wrap; white-space:wrap')
document.querySelector('.nav-container').appendChild(newPar);


//SELECT
newInput.addEventListener('select', (evt) => {
    const log = document.querySelector('#log');
    evt.preventDefault();
    const selection  = evt.target.value.substring(evt.target.selectionStart, evt.target.selectionEnd);
    log.textContent =  `you selected ${selection}`
})



// !this is a comment
// ?another comment
// TODO: this is super cool
// *is this any dfifferent
//this is something else