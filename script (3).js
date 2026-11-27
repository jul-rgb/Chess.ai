document.addEventListener("DOMContentLoaded", init);

function init() {
 let TestTag = document.createElement("h2");
 TestTag.innerText = "Coming soon: Build ideas in english"

 let headers = document.body.getElementsByTagName("header")
 let header = headers[0];
 document.body.appendChild(TestTag);
}