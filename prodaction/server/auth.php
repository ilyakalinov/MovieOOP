<?php
    $email = filter_var(trim($_POST['email']),
        FILTER_SANITIZE_STRING);

    $password = filter_var(trim($_POST['password']),
        FILTER_SANITIZE_STRING);

    $password = md5($password."dsfd32432");

    $mysql = new mysqli('localhost', 'id18312732_data', '/iaC35{Z]yC/eu|x', 'id18312732_data_base');
        
    $result = $mysql->query("SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$password'");
    $user = $result->fetch_assoc();
    if(count($user) == 0) {
        echo "Такой пользователь не найден";
        exit();
    }

    print_r($user);
    exit();

    setcookie('user', $user['email'], time() + 3600 * 24 * 30, "/");
    $mysql->close();

    header('Location: /build/');
    exit();

?>