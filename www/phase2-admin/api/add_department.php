<?php
    //header here
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    // require here
    require_once('../product_db.php');
    require_once('response_msg.php');

    if (empty($_POST['departmentName']) ||
        empty($_POST['description']) ||
        empty($_POST['quantity'])) {
            error_response(150,'Dữ liệu đầu vào không hợp lệ');
    }

    $name = $_POST['departmentName'];
    $desc = $_POST['description'];
    $quantity = $_POST['quantity'];

    $id = add_department($name,$desc, $quantity);

    if($id == -1)
        error_response(157,'Thêm phòng ban thất bại');
    else
        success_response($id, "Thêm phòng ban thành công");
?>