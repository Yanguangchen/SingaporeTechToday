function subscribed(clickedElement) {
  // Change background color to green
  clickedElement.style.backgroundColor = "darkgreen";
  clickedElement.style.color = "white";
  clickedElement.style.fontSize = "120%";

  // Change text inside the <p> tag within the clicked <div>
  clickedElement.getElementsByTagName("p")[0].innerText = "Awaiting Payment";
}
