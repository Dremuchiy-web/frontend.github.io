const modal = document.getElementById("modal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

form.onsubmit = function(event) {
  event.preventDefault(); 

  if (form.checkValidity()) {
    successMessage.style.display = "block";
    
    setTimeout(() => {
      modal.style.display = "none";
      successMessage.style.display = "none";
      form.reset();
    }, 2000);
  } else {
    form.reportValidity();
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      country: document.getElementById("country").value,
      date: document.getElementById("date").value,
      comments: document.getElementById("comments").value,
    };

    console.log("Данные формы:");
    for (const key in formData) {
      console.log(`${key}: ${formData[key]}`);
    }

  });

});
