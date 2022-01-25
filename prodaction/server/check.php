<?php
    $login = filter_var(trim($_POST['login']),
        FILTER_SANITIZE_STRING);

    $email = filter_var(trim($_POST['email']),
        FILTER_SANITIZE_STRING);

    $password = filter_var(trim($_POST['password']),
        FILTER_SANITIZE_STRING);

    if( mb_strlen($login) < 4 || mb_strlen($login) > 16 ) {
        echo 'Не допустима длинна логина';
        exit();
    } else if( mb_strlen($email) < 8 || mb_strlen($email) > 50 ) {
        echo 'Не допустима длинна почты';
        exit();
    } else if( mb_strlen($password) < 4 || mb_strlen($password) > 18 ) {
        echo 'Не допустима длинна пароля';
        exit();
    }

    $mysql = new mysqli('localhost', 'id18312732_data', '/iaC35{Z]yC/eu|x', 'id18312732_data_base');

    $mysql->query("INSERT INTO `users` (`email`)
        VALUES('$email')");
    $mysql->close();
    header('Location: /build/');
?>