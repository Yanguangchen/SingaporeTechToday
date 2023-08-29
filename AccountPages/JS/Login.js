function Success() {
  //change button to login successful
  document.getElementById("loginbtnID").innerHTML = "Login Successful";

  //alerts user that the login is successful
  alert("Login Successfully, Welcome Reader");

  //Style the login button to green
  document.getElementById("loginbtnID").style.background = "green";
  window.location.href = "Subscribe.html";
}

function CreateAcc() {
  //Create Account Button
  document.getElementById("createAccount").innerHTML =
    "Please fill in your details";

  //Change button to green on click
  document.getElementById("createAccount").style.background = "green";
  //change button to wider on click
  document.getElementById("createAccount").style.width = "100%";

  //Loads Account Creation Form On Click
  var formHtml = `
    <form id="formID" action="/submit" method="post">
        <label for="username">1. Create Unsername:</label>
        <input type="text" id="username" name="username" required><br>
        <label for="password">2. Set yout password:</label>
        <input type="password" id="password" name="password" required><br>
        <label for="email">3. Enter your Email Address:</label>
        <input type="text" id="email" name="email" required><br>
        <button type="submit" id="submit" onclick="Prompt()">Submit</button>
    </form>
`;

  //Chage the background of the form to white
  document.getElementById("formContainer").style.background = "white";
  document.getElementById("formContainer").innerHTML = formHtml;
}

//Alert user that account has been created
function Prompt() {
  alert("Your account has been created");
}
