document.addEventListener("DOMContentLoaded", init);

function init() {
 let TestTag = document.createElement("h2");
 TestTag.innerText = "Bald Verfügbar: Mehr Funktionen für Englisch, Mehr Bauideen "

 let headers = document.body.getElementsByTagName("header")
 let header = headers[0];
 document.body.appendChild(TestTag);
}