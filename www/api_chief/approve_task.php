<?php 
    header('Content-Type: application/json');
    // require here
    require_once('../funtions_chief.php');
    require_once('../response_msg.php');

    if(isset($_POST['task-id'])){
        $rate = $_POST['rate'];

        $res = approve_task($_POST['task-id'], $rate);

        if($res == -1 ) error_response(111,'Approve failed');

        success_response('Approve successfully',$_POST['task-id']);
    }

?>