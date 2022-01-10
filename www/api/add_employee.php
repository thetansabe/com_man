<?php
    //header here
    header('Content-Type: application/json');
    // require here
    require_once('../functions_db.php');
    require_once('response_msg.php');

    if (empty($_POST['fullname']) ||
        empty($_POST['username']) ||
        empty($_POST['department']) ||
        empty($_POST['role'])){
            error_response(100,'Du lieu dau vao khong hop le');
    }

    $fullName = $_POST['fullname'];
    $userName = $_POST['username'];
    $department = $_POST['department'];
    // $password = $fullName;
    $role = $_POST['role'];

    $added_id = add_employee($fullName,$userName,$department,$role);

    if($added_id == -1)
        error_response(101,'Add failed');
    else
        success_response('Add thanh cong',$added_id);
?>