const projectDetails = [
  {
      image: "images/projects/project1.png",
      description: "React-Native ile IOS ve Android Yoklama Mobil Uygulaması"
  },
  {
      image: "images/projects/project2.png",
      description: "ASP.NET Core MVC Yapısı ile Basit E-Ticaret Sitesi"
  },
  {
      image: "images/projects/project3.png",
      description: "ASP.NET Core API, API Consume ile Otel Rezervasyon Sistemi"
  },
  {
      image: "images/projects/project4.png",
      description: "JAVA Swing, MySQL ile Stok Takip Programı"
  },
  {
      image: "images/projects/project5.png",
      description: "ASP.NET Core Onion Architacture ile Araba Kiralama Sitesi"
  },
  {
      image: "images/projects/project6.png",
      description: "React Next.js ile Kişisel Portfolyö Sitesi"
  }
];

function showDetails(id) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");

  if (projectDetails[id - 1]) {
    const project = projectDetails[id - 1];

    modalImage.src = project.image;
    modalDescription.innerText = project.description;

    modal.style.display = "flex";
  } 
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }
});
