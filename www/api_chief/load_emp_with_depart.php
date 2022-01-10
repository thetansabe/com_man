<?php 
    //TARGET: lay ra mang cac username co depart can
    require_once('../funtions_chief.php');
    require_once('../session_start.php');
    
    $employees = load_emp_with_depart($department);
    $usernames = array();

    foreach($employees as $employee){
        $usernames[] = $employee["UserName"];
    }

?>