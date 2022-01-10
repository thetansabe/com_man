<?php
    //header here
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    // require here
    require_once('../product_db.php');
    require_once('response_msg.php');

    if (empty($_POST['fullName']) ||
        empty($_POST['username']) ||
        empty($_POST['department']) ||
        empty($_POST['role'])){
            error_response(150,'Dữ liệu đầu vào không hợp lệ');
    }

    $fullName = $_POST['fullName'];
    $userName = $_POST['username'];
    $department = $_POST['department'];
    $role = $_POST['role'];
    // $password = $fullName;

    $id = add_employee($fullName,$userName,$department,$role);

    if($id == -1)
        error_response(151,'Thêm nhân viên thất bại');
    else
        success_response($id, "Thêm nhân viên thành công");
?>