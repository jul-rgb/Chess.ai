document.addEventListener("DOMContentLoaded", init);

function init() {
 let TestTag = document.createElement("h2");
 TestTag.innerText = "Importante: esta parte del sitio web aún no está terminada"

 let headers = document.body.getElementsByTagName("header")
 let header = headers[0];
 document.body.appendChild(TestTag);
}