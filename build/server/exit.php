<?php
$mysql = new mysqli('Localhost', 'root', 'YES', 'id18312732_data_base');
$result = $mysql->query("SELECT * FROM `users_info`/*  WHERE `email` = '$email' AND `password` = '$password' */");
$user = $result->fetch_assoc();
     setcookie('user', $user['email'], time() - 3600, "/");
    //  setcookie('movieList', $user['movieList'], time() - 3600, "/");
    //  setcookie('login', $user['name'], time() - 3600, "/");
    //  setcookie('icon', $user['icon'], time() - 3600, "/");
    echo ($result)
    // header('Location: /build/');
    exit();
?>