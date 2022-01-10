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
    if (!property_exists($input,'id')||
        !property_exists($input,'leaderId')) {
        error_response(154, "Thiếu thông tin đầu vào");
    }

    if (empty($input->id) ||
        empty($input->leaderId)) {
        error_response(155,"Thông tin không hợp lệ");
    }

    $id = $input->id;
    $leaderId = $input->leaderId;

    $employee = get_employee($leaderId);
    
    //update department info
    $result = update_leader($id, $leaderId, $employee["UserName"]);

    if ($result) {
        success_response($id,"Update trưởng phòng ban thành công");
    }
    else {
        error_response(159, "Update trưởng phòng ban thất bại");
    }
?>