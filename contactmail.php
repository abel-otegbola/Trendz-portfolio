<?php
$toEmail = "abel15655@gmail.com";
$subject = "Message from client through portfolio";
$mailHeaders = "From: " $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
if(mail($toEmail,$subject,$_POST["message"],$mailHeaders)) {
print "<p class='success'>Contact Mail Sent.</p>";
} else {
print "<p class='Error'>Problem in Sending Mail.</p>";
}
?>