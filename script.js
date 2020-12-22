var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");


for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}
