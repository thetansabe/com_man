<?php 
    header('Content-Type: application/json');
    // require here
    require_once('../funtions_chief.php');
    require_once('../response_msg.php');

    if(isset($_POST['task-id'])){
        $deadline = $_POST['new-dead'];
        $desc = $_POST['note'];

        $res = reject_task($_POST['task-id'],$deadline,$desc);

        if($res == -1 ) error_response(112,'Reject failed');

        success_response('Reject successfully',$_POST['task-id']);
    }

?>