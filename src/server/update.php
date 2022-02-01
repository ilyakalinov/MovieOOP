<?php
    $jsonobj = `{"movie":", 728526, +, 299534, +, +","email":"muromec2012wot@gmail.com"}`;
    
    echo json_decode($jsonobj);
    $mysql = new mysqli('Localhost', 'root', 'YES', 'id18312732_data_base');
    
    if (mysqli_connect_error()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    printf("Host information: %s\n", $mysql->host_info);
    
    $result = $mysql->query("SELECT * FROM `users_info` WHERE `email` = '$email'");
    $user = $result->fetch_assoc();
    
    $mysql->close();
    print_r($user);

    // echo $_POST['text']; WBbm8i!evR$rZ1kVk5*z
    // echo $_POST['email'];
?>