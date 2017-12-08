var buttonCallback = function() {
    var newElement = document.createElement("li");
    newElement.innerHTML = "test";
    var list = document.getElementById("thelist");
    list.appendChild(newElement);
}

var button = document.getElementById("b");
button.addEventListener("click", buttonCallback);
