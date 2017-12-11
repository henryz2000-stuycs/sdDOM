var itemNum = 8;
var list = document.getElementById("thelist");
var items = document.getElementsByTagName("li");
var heading = document.getElementById("h");
var body = document.getElementsByTagName("body")[0];
var fibNum = 0;



var addFib = function(){
    var newElement = document.createElement("li");
    newElement.setAttribute("class", "fib");
    newElement.innerHTML = fibonacci(fibNum);
    list2.appendChild(newElement);
    fibNum++;
};

var buttonCallback = function(e) {
    var newElement = document.createElement("li");
    newElement.innerHTML = "item " + itemNum;
    addListListeners(newElement);
    list.appendChild(newElement);
    itemNum++;
};

var addList = function() {
    var newElement = document.createElement("ol");
    body.appendChild(newElement);
};

var addButton = function() {
    var newElement = document.createElement("button");
    newElement.innerHTML = "Button two";
    body.appendChild(newElement);
};

var fibonacci = function(n) {
    if(n<2){
	return 1;
    }
    else{
	var fibNums = document.getElementsByClassName("fib");
	var n = fibNums.length;
	return Number(fibNums[n-1].innerHTML) + Number(fibNums[n-2].innerHTML);
    }
};

var button = document.getElementById("b");
button.addEventListener("click", buttonCallback);

var listEnterCallback = function(e) {
    heading.innerHTML = this.innerHTML;
};

var listLeaveCallback = function(e) {
    heading.innerHTML = "Hello World!";
};

var listClickCallback = function(e) {
    this.remove();
};

var addListListeners = function(item) {
    item.addEventListener("mouseenter", listEnterCallback);
    item.addEventListener("mouseleave", listLeaveCallback);
    item.addEventListener("click", listClickCallback);
};

for (var i = 0; i < items.length; i++){
    addListListeners(items[i]);
};


addList();
var list2 = document.getElementsByTagName("ol")[1];
addButton();
var button2 = document.getElementsByTagName("button")[1];
button2.addEventListener("click", addFib);
