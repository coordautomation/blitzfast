document
  .querySelector(".inquiry-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
               
    var formData = new FormData(this); // Gather form data

    fetch(
       "https://script.google.com/macros/s/AKfycbw9vUx_4Aqw-Fxvw8KeENzlwSCkANWUk4fP0LkydqmhgUzF7izhaa_ukEjQ4iyvNqVc-g/exec"
            
           {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.text())
      .then((text) => {
        alert(
          "We have received your inquiry, we will get back to you shortly on the provided email address."
        );
        document.querySelector(".inquiry-form").reset(); // Reset form after submission
      })
      .catch((error) => console.error("Error:", error));
  });

      
