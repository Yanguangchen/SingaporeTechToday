function subscribed(clickedElement) {
  // Change background color to green
  clickedElement.style.backgroundColor = "darkgreen";
  clickedElement.style.color = "white";
  clickedElement.style.fontSize = "120%";

  // Change text inside the <p> tag within the clicked <div>
  clickedElement.getElementsByTagName("p")[0].innerText = "Awaiting Payment";
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}