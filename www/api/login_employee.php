<?php
    session_start();
    //header here
    header('Content-Type: application/json');
    // require here
    require_once('../functions_db.php');
    require_once('response_msg.php');

    if(empty($_POST['username']) || empty($_POST['password'])){
        error_response(102,'Thieu thong tin dang nhap');
    }

    $userName = $_POST['username'];
    $password = $_POST['password'];

    $res = login($userName,$password);

    if($res == -1){
        error_response(103,'Tai khoan khong ton tai');
    }

    if($res == -2){
        error_response(104,'Mat khau khong dung');
    }

    //truong hop dung
    //read data -> luu vao session
    read_employee($userName,$password);
    //thong bao thanh cong -> redirect o js
    success_response('Dang nhap thanh cong',$res);
    
    
?>