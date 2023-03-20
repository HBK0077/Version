var form = document.getElementById("my-form");

form.addEventListener("submit", appoint);

function appoint(e){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("pno").value;
    var gender = document.getElementById("gender").value;
    var time = document.getElementById("time").value;
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('PhoneNumber', phone);
    localStorage.setItem('Gender', gender);
    localStorage.setItem('Time', time);
    alert(name+"Your Booking is Confirmed at"+time+"time");
}