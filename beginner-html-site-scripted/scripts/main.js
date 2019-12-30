var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox-icon.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

//当浏览器未关闭，重新访问网页时，用户名仍然存放在localStorage里
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, '+storedName;
}

myButton.onclick = function() {
  setUserName();
}