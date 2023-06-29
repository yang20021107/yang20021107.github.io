let I="yangzhixian";
if(I==='yangzhixian'){
    alert('I am yangzhixian');
}else{
    alert('I am not yanghixian');
}
/*
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });
*/
  let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fox.png') {
      myImage.setAttribute('src', 'images/fox2.png');
    } else {
      myImage.setAttribute('src', 'images/fox.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName)
        setUserName();
    else{
    localStorage.setItem('name', myName);// localStorage API，它可以将数据存储在浏览器中供后续获取。这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }