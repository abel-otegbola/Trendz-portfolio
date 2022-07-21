<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'Abeldeveloper2@gmail.com';
    $email_subject = $subject;

    $email_body = "User Name: $name.\n".
                    "User Email: $email.\n".
                    "user Message: $message.\n";

    $to = "abel15655@gmail.com"

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";
    
    mail($to, $email_subject,$email_body,$headers);

    header("Location: home.html");

?>