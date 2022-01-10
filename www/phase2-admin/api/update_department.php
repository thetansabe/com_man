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
        !property_exists($input,'departmentName') ||
        !property_exists($input,'description') ||
        !property_exists($input, 'quantity')) {
        error_response(154, "Thiếu thông tin đầu vào");
    }

    if (empty($input->id) ||
        empty($input->departmentName) ||
        empty($input->description) ||
        empty($input->quantity)) {
        error_response(155,"Thông tin không hợp lệ");
    }

    $id = $input->id;
    $name = $input->departmentName;
    $desc = $input->description;
    $quantity = $input->quantity;
    
    //update department info
    $result = update_department($id, $name, $desc, $quantity);

    if ($result) {
        success_response($id,"Update phòng ban thành công");
    }
    else {
        error_response(158, "Update phòng ban thất bại");
    }
?>