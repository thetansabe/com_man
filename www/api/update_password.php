<?php
    //header here
    header('Content-Type: application/json');
    // require here
    require_once('../functions_db.php');
    require_once('response_msg.php');

    if( empty($_POST['idForUpdate']) ||
        empty($_POST['newPassword'])){
            error_response(105,'Thieu thong tin update password');
    
    }

    $idForUpdate = $_POST['idForUpdate'];
    $newPassword = $_POST['newPassword'];

    $res = update_password($idForUpdate,$newPassword);

    if($res == -1)
        error_response(106,'Error in update password');
    
    success_response('Update thanh cong',intval($idForUpdate));
?>