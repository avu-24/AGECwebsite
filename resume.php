<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the form data here
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    // File upload handling
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["resume"]["name"]);
    move_uploaded_file($_FILES["resume"]["tmp_name"], $targetFile);

    // Email sending
    $to = "estimating@agecpipeline.net";  
    $subject = "New Resume Submission - AGEC Inc.";
    $message = "Name: $name\nEmail: $email\nPhone: $phone";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    // Redirect to thankyou.html
    header("Location: thankyou.html");
    exit; // Ensure no further output is sent
} else {
    // If the form is not submitted, redirect to an error page or handle accordingly
    header("Location: error.html");
    exit;
}
?>
