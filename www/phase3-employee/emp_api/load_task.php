<?php 
    header('Content-Type: application/json');
    require_once('../../response_msg.php');
    require_once('../function_emp.php');

    if(isset($_POST['UserName'])){
        $arr = load_assigned_task($_POST['UserName']);

        die(json_encode($arr));
    }
?>