//create varible
let container = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
const newLocal = "toDo";

//add function to button
document.getElementById(newLocal).addEventListener("click", function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-show");
    paragraph.innerText = inputField.value;
    container.appendChild(paragraph);
    inputField.value = "";
 // cross the line of text
    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through";
    });
// double click, text will disapear
    paragraph.addEventListener("dblclick", function () {
        container.removeChild(paragraph);
    });
});