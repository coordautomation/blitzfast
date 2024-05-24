const form = document.querySelector("#form")
   const submitButton = document.querySelector("#submit")
   const scriptURL =  "https://script.google.com/macros/s/AKfycbwe2qjhdh7cMlAlVNqg3UPNalnP3v9h10aXpqPpQHnmPScPsmx8UmFYAY3qkk7E0rGPLA/exec"


   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitButton.disabled = false
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
   })
</script>
