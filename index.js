

var mainContent = document.getElementById("main-content");



console.log(mainContent.children);



var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {

    document.write(renderElements[i].innerHTML + "<br>");

}




document.getElementById("first-name").value = "kaif";



document.getElementById("last-name").value = "abbasi";

document.getElementById("email").value = "kaifabbasi@example.com";