var ChangeBtn = document.querySelector(".Change");

function ChangeStyle() {
    var textElement = document.querySelector(".text");
    textElement.classList.add("changed");
}

ChangeBtn.onclick = ChangeStyle;
///////////////////////////////////////////
var ResetBtn = document.querySelector(".Reset");

function ResetStyle() {
    var textElement = document.querySelector(".text");
    textElement.classList.remove("changed");
}

ResetBtn.onclick = ResetStyle;
