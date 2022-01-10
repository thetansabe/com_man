<?php 
    header('Content-Type: application/json');
    //TARGET: lay ra mang cac username co depart can
    require_once('../funtions_chief.php');
    require_once('../response_msg.php');

    if(isset($_POST['requestid'])){
        
        $res = approve_absent_request($_POST['requestid']);
        
        if($res == -1) error_response(116,'Approve absent request failed');
        success_response('Approve successfully',$res);
    }
    

?>