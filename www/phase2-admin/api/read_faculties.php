<?php
    //header here
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    // require here
    require_once('../product_db.php');
    require_once('response_msg.php');

    $facilities = get_faculties();

    success_response($facilities,"Get data from database successfully");
?>