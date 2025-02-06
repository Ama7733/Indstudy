<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email recipient (change this to your email address)
    $to = "Murakumo7vr@gmail.com";
    
    // Subject of the email
    $subject = "New Contact Form Submission";

    // Email content
    $body = "You have received a new message from the contact form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: \n$message\n";

    // Headers for the email (from the sender's email)
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Success message
        echo "Thank you for contacting us, $name. We will get back to you soon!";
    } else {
        // Error message
        echo "There was an issue sending your message. Please try again.";
    }
}
?>
