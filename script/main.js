
// Get the modal container
var modal = document.getElementById('modalContainer');

// Get the button that opens the modal
var btn = document.getElementById("modalButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

var details = {firstName:"", lastName:"",email:""};

// Function to be called when details submitted
function detailsSubmit(){
    details.firstName = document.getElementById("firstName").value;
    details.lastName = document.getElementById("lastName").value;
    details.email = document.getElementById("email").value;
    if(details.firstName === ""){
        alert("Please fill first name");
    } else if(details.lastName === "") {
        alert("Please fill last name");
    } else if(details.email === ""){
        alert("Please fill email");
    } else {
        document.getElementsByClassName("result")[0].innerHTML = "";
        document.getElementsByClassName("result")[0].innerHTML = "Thankyou "+details.firstName+" "+details.lastName+" for submitting details"; 
        modal.style.display = "none";   
    }
}