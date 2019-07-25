window.onload = submitButtonInit;

var submitButtonInit = function() {
    ebtn = document.getElementById("email-submit-button");
    ebtn.addEventListener("click", addEmail())
}

