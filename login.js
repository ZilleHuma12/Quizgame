
function getValues(){
  let formData= {};
  formData['email']= document.getElementById("email").value;
  formData['password']= document.getElementById("password").value;
  return formData
  }
 function submitForm() {
   let data = getValues();
   console.log(data);
       fetch("http://localhost:3001/api/user/login", {
         method: "POST",
         headers: {'Content-Type': 'application/json'}, 
         body: JSON.stringify(data)
       }).then(res => res.json())
       .then((data) =>{
         console.log(data);
         if(data.isLoggedIn){
           window.alert("You are logged In");
          //  window.onclick(<a href="/userQuiz.html"></a>)
         }
         else{
           window.alert(data.message)
         }
       }
         );
  
 }
 