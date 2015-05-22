<?php
require_once 'phpmailer/PHPMailerAutoload.php';
$f = file_get_contents("php://input");
$var = json_decode($f);
if (isset($var->fname) && isset($var->lname) && isset($var->inputEmail) && isset($var->inputMessage)) {

    //check if any of the inputs are empty
    if (empty($var->fname) || empty($var->inputEmail) || empty($var->lname) || empty($var->inputMessage)) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->IsSMTP();
    $mail->Mailer = "smtp";
    $mail->SMTPAuth = true;
    $mail->Host ="mail.webmpires.net";
    $mail->Port=587;
    $mail->Username = "testing@webmpires.net";
    $mail->Password = "enterluck";
    
    $mail->SMTPDebug  = 1; 
    $mail->From = $var->inputEmail;
    $mail->FromName = $var->fname.' '.$var->lname;
    $mail->AddAddress('shahlahar@outlook.com'); //recipient 
    $mail->Subject = "Message from Website Contact us form";
    $mail->Body = "Name: " . $var->fname." ".$var->fname. "\r\n\r\nMessage: " . stripslashes($var->inputMessage);

    // if (isset($_POST['ref'])) {
    //     $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    // }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);

}