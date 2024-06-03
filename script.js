document
  .querySelector("Enquiry Form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
               
    var formData = new FormData(this); // Gather form data

    fetch(
       "https://docs.google.com/spreadsheets/d/1QqbjnJoJUmiodF3TMCkJVoMBBQs6hmbCtSR_fUloWUk/edit?usp=sharing_eil_se_dm&ts=665d9e28"
            
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
        document.querySelector("Enquiry Form").reset(); // Reset form after submission
      })
      .catch((error) => console.error("Error:", error));
  });
