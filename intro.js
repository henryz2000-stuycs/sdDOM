var itemNum = 8;
var list = document.getElementById("thelist");
var items = document.getElementsByTagName("li");
var heading = document.getElementById("h");

var buttonCallback = function(e) {
    var newElement = document.createElement("li");
    newElement.innerHTML = "item " + itemNum;
    addListListeners(newElement);
    list.appendChild(newElement);
    itemNum++;
}

var button = document.getElementById("b");
button.addEventListener("click", buttonCallback);

var listEnterCallback = function(e) {
    heading.innerHTML = this.innerHTML;
}

var listLeaveCallback = function(e) {
    heading.innerHTML = "Hello World!";
}

var listClickCallback = function(e) {
    this.remove();
}

var addListListeners = function(item) {
    item.addEventListener("mouseenter", listEnterCallback);
    item.addEventListener("mouseleave", listLeaveCallback);
    item.addEventListener("click", listClickCallback);
}

for (var i = 0; i < items.length; i++){
    addListListeners(items[i]);
}
