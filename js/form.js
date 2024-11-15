function formControl(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value.trim();
    const errorMessage = document.getElementById("error-message");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errorMessage.style.display = "none";
    errorMessage.innerText = "";
    
    if (!name) {
        errorMessage.innerText = "Lütfen adınızı giriniz." 
        errorMessage.style.display = "block";
        return false;   
    }
    if (!email) {
        errorMessage.innerText = "Lütfen e-mailinizi giriniz." 
        errorMessage.style.display = "block";
        return false;   
    }
    if (!emailRegex.test(email)) {
        errorMessage.innerText = "Lütfen e-mailinizi formatında giriniz." 
        errorMessage.style.display = "block";
        return false; 
    }
    if (!message) {
        errorMessage.innerText = "Lütfen mesajınızı giriniz." 
        errorMessage.style.display = "block";
        return false;   
    }    
    return true;
}
