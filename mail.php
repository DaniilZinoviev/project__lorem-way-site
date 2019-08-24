<?php
$recepient = "danzino21@gmail.com";
$sitename = "Бизнес лендинг";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nЭлектронная почта: $email \nТелефон: $phone"

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
	

?>