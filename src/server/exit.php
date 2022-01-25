<?php
    setcookie('user', $user['email'], time() - 3600 * 24 * 30, "/");

    header('Location: /build/');
    exit();
?>