<?php 
    require_once('../function_emp.php');

    $arr = array();

    if(isset($_POST['username'])){
        $arr = load_absent($_POST['username']);
        die(json_encode($arr));
    }
    
?>