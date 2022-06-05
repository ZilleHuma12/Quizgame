
function getValues(){
    let formData= {};
    formData['question']= document.getElementById("question").value;
    formData['answer1']= document.getElementById("answer1").value;
    formData['answer2']= document.getElementById("answer2").value;
    formData['answer3']= document.getElementById("answer3").value;
    formData['one']= document.getElementById("one").checked;
    formData['two']= document.getElementById("two").checked;
    formData['three']= document.getElementById("three").checked;
    console.log(formData['one']);
    return formData
    }

    function submitForm() {
        let listArr= []
     let data = getValues();
     console.log(data);
         fetch("http://localhost:3001/api/admin/adminQuestions", {
           method: "POST",
           headers: {'Content-Type': 'application/json'}, 
           body: JSON.stringify(data)
         }).then(res => res.json())
         .then((data) =>{
           console.log(data);
         }
           );
    
   }
   