function getValues() {
  let formData = {};
  formData["userName"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  formData["password"] = document.getElementById("password").value;
  formData["confirmpassword"] =
    document.getElementById("confirmpassword").value;
  return formData;
}
function submitForm() {
  let data = getValues();
  console.log(data);
  fetch("http://localhost:3001/api/user/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.id) {
        window.alert("You are successfully registered!");
      } else {
        window.alert("This email already exists");
      }
    });
}
