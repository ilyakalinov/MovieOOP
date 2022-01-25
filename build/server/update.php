<?php
  $movie = $_POST['text']

  $mysql = new mysqli('Localhost', 'root', 'YES', 'id18312732_data_base');
    
    if (mysqli_connect_error()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    printf("Host information: %s\n", $mysql->host_info);
    
    $mysql->query("INSERT INTO `users_info`(`movieList`)
    VALUES('$movie')");
    $mysql->close();
    header('Location: /build/');
?>