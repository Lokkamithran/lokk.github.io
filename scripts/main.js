let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpg') {
      myImage.setAttribute('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute('src','images/image.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
let myName = prompt('Please enter yoour name.');
if(!myName){ setUserName();}
else{
localStorage.setItem('name', myName);
myHeading.textContent = 'Isnt this site awesome, ' + myName + '?';}}

if(!localStorage.getItem('name')){
setUserName();}
else{
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool, ' + storedName;}

myButton.onclick = function() {setUserName();}
