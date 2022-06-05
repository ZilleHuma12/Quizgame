// let data = {
//   userName: "",
//   email: "",
//   password: "",
//   confirmpassword: "",
// };
 function getValues(){
 let formData= {};
 formData['userName']= document.getElementById("name").value;
 formData['email']= document.getElementById("email").value;
 formData['password']= document.getElementById("password").value;
 formData['confirmpassword']= document.getElementById("confirmpassword").value;
 return formData
 }
function submitForm() {
  let data = getValues();
  console.log(data);
      fetch("http://localhost:3001/api/user/signup", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)
      }).then(res => res.json())
      .then((data) =>{
        console.log(data);
        // document.getElementById('data')=data;
      }
        );
  // var xhr = new XMLHttpRequest();
  // xhr.open("POST", "http://localhost:3001/api/user/signup", true);
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.send(JSON.stringify(data));
  // fetch("http://localhost:3001/api/user/getdata", {
  //   method: "GET",
  //   headers: {'Content-Type': 'application/json'}, 
  // }).then(res => res.text())
  // .then((data) =>{
  //   console.log(data);
  // }
  //   );
//   xhr.onload = function() {
//     console.log("HELLO")
//     console.log(this.responseText);
//     var datas = JSON.parse(this.responseText);
//     console.log(datas);
//     window.alert(datas)
//   }
}
