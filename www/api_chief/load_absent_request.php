<?php 
    header('Content-Type: application/json');
    //TARGET: lay ra mang cac username co depart can
    require_once('../funtions_chief.php');

    if(isset($_POST['department'])){
        $department = $_POST['department'];
        $department = strtolower($department);

        $res = load_absent_requests($department);
        die(json_encode($res));
    }
    

?>