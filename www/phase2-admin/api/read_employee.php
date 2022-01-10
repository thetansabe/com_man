<?php
    //header here
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    // require here
    require_once('../product_db.php');
    require_once('response_msg.php');

    if (empty($_POST['id'])) {
        error_response(150, "Dữ liệu đầu vào không hợp lệ");
    }

    $id = $_POST['id'];
    $employee = get_employee($id);

    success_response($employee,"Get data from database successfully");
?>