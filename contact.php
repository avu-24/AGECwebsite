<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);

    // Check if required fields are empty
    if (empty($name) || empty($email) || empty($phone)) {
        // Handle empty fields, e.g., redirect back to the form with an error message
        header("Location: contact.html?error=empty_fields");
        exit();
    }

    // File upload handling
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["resume"]["name"]);

    // Check if the file is uploaded successfully
    if (move_uploaded_file($_FILES["resume"]["tmp_name"], $targetFile)) {
        // Email sending
        $to = "estimating@agecpipeline.net";
        $subject = "New Contact Submission - AGEC Inc.";
        $message = "Name: $name\nEmail: $email\nPhone: $phone";
        $headers = "From: $email";

        // Check if the email is sent successfully
        if (mail($to, $subject, $message, $headers)) {
            // Redirect to a thank-you page or display a success message
            header("Location: thankyou.html");
            exit();
        } else {
            // Handle email sending failure, e.g., redirect back to the form with an error message
            header("Location: contact.html?error=email_failure");
            exit();
        }
    } else {
        // Handle file upload failure, e.g., redirect back to the form with an error message
        header("Location: contact.html?error=file_upload_failure");
        exit();
    }
}
?>
