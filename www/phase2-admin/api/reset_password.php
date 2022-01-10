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
    if (!property_exists($input,'id')) {
        error_response(154, "Thiếu thông tin đầu vào");
    }

    if (empty($input->id)) {
        error_response(155,"Thông tin không hợp lệ");
    }

    $id = $input->id;
    //read employee information from id
    $employee = get_employee($id);

    //get username of this employee
    $username = $employee['UserName'];
    
    //reset password 
    $result = update_password($id, $username);

    if ($result) {
        success_response($id,"Reset password thành công");
    }
    else {
        error_response(156, "Reset password thất bại");
    }
?>