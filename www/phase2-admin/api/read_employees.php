<?php
    //header here
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    // require here
    require_once('../product_db.php');
    require_once('response_msg.php');

    $employees = get_employees();

    success_response($employees,"Get data from database successfully");
?>