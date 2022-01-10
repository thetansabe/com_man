<?php
    //header here
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');
    // require here
    require_once('../product_db.php');
    require_once('response_msg.php');
    //check method
    if ($_SERVER['REQUEST_METHOD'] !== "PUT") {
        error_response(152, "Phương thức này không được hỗ trợ");
    }

    //read json from client
    $input = json_decode(file_get_contents("php://input"));
    
    //check data
    if (is_null($input)) {
        error_response(153, "Chỉ hỗ trợ JSON");
    }

    //check data
    if (!property_exists($input,'user')||
        !property_exists($input,'status')) {
        error_response(154, "Thiếu thông tin đầu vào");
    }

    if (empty($input->user) ||
        empty($input->status)) {
        error_response(155,"Thông tin không hợp lệ");
    }

    $user = $input->user;
    $status = $input->status;
    
    //update department info
    $result = update_attendance($user, $status);

    if ($result) {
        success_response($user,"Update trạng thái thành công");
    }
    else {
        error_response(159, "Update trạng thái thất bại");
    }
?>