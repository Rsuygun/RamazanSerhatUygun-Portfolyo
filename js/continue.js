function continueDesc(){
    var desc = document.querySelector(".desc-hidden");
    desc.style.display = desc.style.display === "flex" ? "none" : "flex";
    if (descButton.textContent === "Daha Fazla Göster") {
        descButton.textContent = "Daha Az Göster";
    }else{
        descButton.textContent = "Daha Fazla Göster";
    }
}

