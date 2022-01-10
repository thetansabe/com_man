<?php 
    header('Content-Type: application/json');
    // require here
    require_once('../funtions_chief.php');
    require_once('../response_msg.php');

    if(isset($_POST['task-id'])){
        $res = cancel_task($_POST['task-id']);

        if($res == -1 ) error_response(110,'Cancel failed');

        success_response('Cancel successfully',$_POST['task-id']);
    }

?>