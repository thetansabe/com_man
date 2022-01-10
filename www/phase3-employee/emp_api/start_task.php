<?php 
    header('Content-Type: application/json');
    require_once('../../response_msg.php');
    require_once('../function_emp.php');

    if(isset($_POST['taskid'])){
        $res = start_task($_POST['taskid']);
        if($res == -1) error_response(114,'Start task failed');
        success_response('Start Task Successfully', $res);
    }
?>