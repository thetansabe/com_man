<?php
    function get_connection() {
        $host = "mysql-server";
        $user = "root";
        $pass = "root";
        $db = "companymanagement";
        
        $conn = new mysqli($host, $user, $pass, $db);

        if ($conn->connect_error) {
            die("Can not connected");
        }

        return $conn;
    }
?>