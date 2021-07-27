
  var validation = function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message1 = document.getElementById("textarea1").value

    if (name === "" || email === "" || message1 === "") {
      console.log()
      alert("Enter details");
    } else {
      alert("Your message has been received");
    }
  };
