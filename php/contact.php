<?php

  header('Content-Type: text/html; charset=UTF-8');

  $posting = "phawayvuelos@gmail.com";
  $name = $_POST["name"];
  $contact = $_POST["contact"];
  $message = $_POST["message"];
  $message = $_POST["Email"];
  
  $content = "\nname: " . utf8_decode($name) .
             "\ncontact: " . $contact .
             "\n\nmessage:\n" . utf8_decode($message);

  mail($posting,utf8_decode("Contacto Web"), $content);

?>