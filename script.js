// Function to handle the form submission
function run() {
  // Get values from form inputs
  let studentId = document.getElementById("studentId").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let address = document.getElementById("address").value;
  let confirmAddress = document.getElementById("confirmAddress").value;
  let picture = document.getElementById("picture").files[0];

  // Check if the address and confirm address match
  if (address !== confirmAddress) {
    alert("The addresses do not match.");
    return;
  }

  // If everything is valid, process the form (here, we're just logging the data)
  console.log("Form Submitted!");
  console.log("Student ID: " + studentId);
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Number: " + number);
  console.log("Address: " + address);

  // Example of handling picture upload (logging file name)
  if (picture) {
    console.log("Picture Uploaded: " + picture.name);
  }

  // Optional: You can perform further processing (e.g., sending the data to a server, etc.)

  // Clear form after submission (Optional)
  document.getElementById("idCardForm").reset();
  document.getElementById("preview").style.display = "none"; // Hide the image preview
}

// Function to display the image preview when a picture is selected
document.getElementById("picture").addEventListener("change", function(event) {
  let file = event.target.files[0];
  let preview = document.getElementById("preview");

  // Check if a file is selected
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.style.display = "block"; // Show the preview image
      preview.src = e.target.result; // Set the image source to the selected file
    };
    reader.readAsDataURL(file);
  } else {
    preview.style.display = "none"; // Hide the preview if no file is selected
  }
});

// Function to toggle dark mode
document.getElementById("toggleDarkMode").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.toggle("dark-mode");

  // Toggle button text based on current mode
  if (document.body.classList.contains("dark-mode")) {
    this.textContent = "Switch to Light Mode";
  } else {
    this.textContent = "Switch to Dark Mode";
  }
});
