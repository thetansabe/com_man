<?php 
    //////////////REMEMBER: load infos by department
    header('Content-Type: application/json');
    // require here
    require_once('../funtions_chief.php');
    require_once('../response_msg.php');
    require_once('../session_start.php');
    //require_once('../db.php');

    $taskList = load_task($department);

    $resultArr = array();

    foreach($taskList as $task){
        $resultArr[] = array_values($task);

    }

    die(json_encode($resultArr));
?>