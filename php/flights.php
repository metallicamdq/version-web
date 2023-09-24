<?php

  header('Content-Type: text/html; charset=UTF-8');

  $posting = "phawayvuelos@gmail.com";
  $legs = $_POST["legs"];
  $from = $_POST["from"];
  $to = $_POST["to"];

  $depart = $_POST["depart"];
  if ($depart != "") {
    $departDate = date("d/m/Y", strtotime($depart));
  }
  else {
    $departDate = "No se ha informado fecha";
  };

  $return = $_POST["return"];
  if ($return != "") {
    $returnDate = date("d/m/Y", strtotime($return));
  }
  else {
    $returnDate = "No se ha informado fecha";
  };

  $pax = $_POST["pax"];
  $aircraft = $_POST["aircraft"];
  $name = $_POST["name"];
  $contact = $_POST["contact"];
  $message = $_POST["message"];
  
  $content = "\nlegs: " . utf8_decode($legs) .
             "\nfrom: " . utf8_decode($from) .
             "\nto: " . utf8_decode($to) .
             "\ndepart: " . $departDate .
             "\nreturn: " . $returnDate .
             "\npax: " . $pax .
             "\n\nname: " . utf8_decode($name) .
             "\ncontact: " . $contact .
             "\nmessage:\n" . utf8_decode($message) ;

  mail($posting,utf8_decode("Cotización Web"), $content);

?>