document.addEventListener("DOMContentLoaded", init);

function init() {
 let TestTag = document.createElement("h2");
 TestTag.innerText = "Important : cette partie du site n'est pas encore terminée."

 let headers = document.body.getElementsByTagName("header")
 let header = headers[0];
 document.body.appendChild(TestTag);
}