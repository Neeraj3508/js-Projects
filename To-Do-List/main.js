var input = document.getElementById('textField');
input.addEventListener('keyup',function(event) {
  if(event.keyCode == 13) {
    event.preventDefault();
    document.getElementById('addButton').click();
  }
});

var myNodeList = document.getElementsByTagName('li');
var i;
for(i = 0; i < myNodeList.length; i++) {
  var btn = document.createElement('span');
  var txt = document.createTextNode('\u00D7');
  btn.className = "close";
  btn.appendChild(txt);
  myNodeList[i].appendChild(btn);
}
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//new element

function newElement() {
  console.log('running');
  var listItem = document.createElement('li');
  var inputField = document.getElementById('textField').value;
  var text = document.createTextNode(inputField);
  listItem.appendChild(text);
  if(inputField == "") {
    alert("Field Is Empty!");
  } else {
    document.getElementById('myUl').appendChild(listItem);
  }
  document.getElementById('textField').value = "";
  //add close button in newly created element
  var btn = document.createElement('span');
  var txt = document.createTextNode('\u00D7');
  btn.className = "close";
  btn.appendChild(txt);
  listItem.appendChild(btn);

  var i;
  var i;
for(i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

