<?php
    $email = filter_var(trim($_POST['email']),
        FILTER_SANITIZE_STRING);

    $password = filter_var(trim($_POST['password']),
        FILTER_SANITIZE_STRING);
    
    $mysql = new mysqli('Localhost', 'root', 'YES', 'id18312732_data_base');
    
        if (mysqli_connect_error()) {
            printf("Connect failed: %s\n", mysqli_connect_error());
            exit();
        }
        printf("Host information: %s\n", $mysql->host_info);

    $result = $mysql->query("SELECT * FROM `users_info` WHERE `email` = '$email' AND `password` = '$password'");
    $user = $result->fetch_assoc();
    
    if(count($user) == 0) {
        echo "Такой пользователь не найден";
        exit();
    };

    print_r($user);
    exit();

    setcookie('user', $user['email'], time() + 3600 * 24 * 30, "/");
    $mysql->close();

    header('Location: /build/');
    exit();

?>