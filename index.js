var form = document.getElementById("my-form");

form.addEventListener("submit", appoint);

function appoint(e){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("pno").value;
    var gender = document.getElementById("gender").value;
    var time = document.getElementById("time").value;
    
    //stroing in the local storage 
    var myObj = {
        Name: name,
        Email: email,
        PhoneNumber : phone,
        Gender : gender,
        Time : time
    };
    //console.log(localStorage.setItem("myObj", JSON.stringify(myObj)));
    axios.post("https://crudcrud.com/api/473d344b67cd4ec6913654685fb61b5c/AppointmentData3",myObj)
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log(err);
    });
    alert(name+"Your Booking is Confirmed at"+time+"time");
}