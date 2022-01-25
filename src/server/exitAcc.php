<?php
$mysql = new mysqli('Localhost', 'root', 'YES', 'id18312732_data_base');
$result = $mysql->query("SELECT * FROM `users_info`/*  WHERE `email` = '$email' AND `password` = '$password' */");
$user = $result->fetch_assoc();
     setcookie('user','', time() - 3600, "/");
     setcookie('movieList', '', time() - 3600, "/");
     setcookie('login', '', time() - 3600, "/");
     setcookie('icon', '', time() - 3600, "/");
    header('Location: /build/');
    exit();
?>