<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate and process the form data as needed
  // For simplicity, let's assume the validation is successful

  // Send the email
  $to = "limbuabhash000@gmail.com";
  $headers = "From: $email";
  $subject = "New Message from Contact Form";
  $body = "Email: $email\n\nMessage: $message";

  if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
    echo "Thank you for your message. We will get back to you soon.";
  } else {
    // Failed to send email
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>
