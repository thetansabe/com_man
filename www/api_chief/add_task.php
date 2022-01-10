<?php 
    //header here
    header('Content-Type: application/json');
    // require here
    require_once('../funtions_chief.php');
    require_once('../response_msg.php');
    //require_once('../session_start.php');
    $department = $_POST['department'];
    $taskTitle = $_POST['task-title'];
    $deadline = $_POST['deadline'];
    $assignTo = $_POST['assign-to'];
    $taskDesc = $_POST['task-desc'];

    $added_task = add_task($taskTitle,$deadline,$assignTo,$taskDesc,$department);

    if($added_task == -1)
        error_response(107,'Add task failed');
    else
        success_response('Add task thanh cong',$added_task);
?>