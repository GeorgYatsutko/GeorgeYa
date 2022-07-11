<?php

$client_name = htmlspecialchars(trim($_POST['client_name']));
$tell = htmlspecialchars(trim($_POST['tell']));
$message = htmlspecialchars(trim($_POST['message']));



mail("george.yatsutko@gmail.com", "Клиент", "$client_name \n $tell \n $message"); 
header('Location: ../index.php');