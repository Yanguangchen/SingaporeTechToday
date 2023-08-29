function subscribed(clickedElement) {
  // Change background color to green
  clickedElement.style.backgroundColor = "darkgreen";
  clickedElement.style.color = "white";
  clickedElement.style.fontSize = "120%";

  // Change text inside the <p> tag within the clicked <div>
  clickedElement.getElementsByTagName("p")[0].innerText = "Awaiting Payment";

  var formHtml = `
  <div id="div">
    <form action="/submit" method="post">

        <label for="Name">Name: </label>
        <input type="text" name="Name" required><br>

        <label for="CardNum">Card Number: </label>
        <input type="password" name="CardNum" required><br>

        <label for="Month">Expiry Month: </label>
        <input type="text" name="Month" required><br>

        <label for="year">Expiry Year: </label>
        <input type="text" name="year" required><br>

        <label for="CVC">CVC:</label>
        <input type="password" name="CVC" required><br>

        <input type="checkbox" name="Master" value="Master">
        <label for="Master">Mastercard</label><br>

        <input type="checkbox" name="Visa" value="Visa">
        <label for="Visa">Visa</label><br>

        <input type="checkbox" name="AMEX" value="AEMX">
        <label for="AMEX">AMEX</label><br>

        <button type="submit" id="submit" onclick="Prompt()">Submit</button>
    </form>

    <div>
`;
  //initialize form in DOM
  document.getElementById("form").innerHTML = formHtml;

  //Style form in DOM
  document.getElementById("form").style.textAlign = "center";

  //Style the from font
  document.getElementById("form").style.fontFamily = "Inria";
  document.getElementById("form").style.color = "white";
  document.getElementById("form").style.fontSize = "120%";



  //Style the from border
  document.getElementById("form").style.borderStyle = "solid";

  //Style the from width
  document.getElementById("form").style.width = "aut0";

  //Style the padding
  document.getElementById("form").style.paddingTop = "2%";
  document.getElementById("form").style.paddingBottom = "2%";

  document.getElementById("div").style.background = "#040362";
  document.getElementById("div").style.marginLeft = "30%";
  document.getElementById("div").style.width = "40%";


  // Select all labels within the form
  const labels = document.querySelectorAll("form label");

  // Select the form and apply grid styles
  const form = document.querySelector("form");
  form.style.display = "grid";
  form.style.gridTemplateRows = "auto auto auto auto auto";
  form.style.gap = "10px";

  // Iterate over the NodeList and apply styles
  labels.forEach((label, index) => {
    if (index === 0) {
      label.style.paddingTop = "3%";
    }

  });
}
