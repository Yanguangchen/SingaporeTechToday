function subscribed(clickedElement) {
  // Change background color to green
  clickedElement.style.backgroundColor = "darkgreen";
  clickedElement.style.color = "white";
  clickedElement.style.fontSize = "120%";

  // Change text inside the <p> tag within the clicked <div>
  clickedElement.getElementsByTagName("p")[0].innerText = "Awaiting Payment";

  var formHtml = `
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
`;
  //initialize form in DOM
  document.getElementById("form").innerHTML = formHtml;

  //Style form in DOM
  document.getElementById("form").style.textAlign = "center";

  

}
