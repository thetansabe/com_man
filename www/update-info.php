<?php 
    header('Content-Type: application/json');
    require_once('session_start.php');
    require_once('funtions_chief.php');
    require_once('response_msg.php');
    require_once('load-info.php');

    $email = $getEmail;
    $fullname = $getName;
    $age = $getAge ;
    $phone = $getPhone;
    $address = $getAddress;
    $gender = $getGender;
    $dateJoin = $getDateJoin;
    $dateBirth = $getDateBirth;
    $imgDir = $getImg;
    if(!empty($_POST['fullname']))
        $fullname = $_POST['fullname'];

    if(!empty($_POST['email']))
        $email = $_POST['email'];
    
    $range = array (
        'options' => array (
            'min_range' => 18,
            'max_range' => 65
        )
    );

    if(filter_input(INPUT_POST,'age',FILTER_VALIDATE_INT,$range))
        $age = $_POST['age'];
    
    if(!empty($_POST['phone']))
        $phone = $_POST['phone'];

    if(!empty($_POST['address']))
        $address = $_POST['address'];

    if(!empty($_POST['gender']))
        $gender = $_POST['gender'];

    if(!empty($_POST['date-join']))
        $dateJoin = $_POST['date-join'];

    if(!empty($_POST['date-birth']))
        $dateBirth = $_POST['date-birth'];

    $res = update_info($empId,$email,$fullname,$age,$phone,$address,$gender,$dateJoin,$dateBirth);
    if($res == -1)
        error_response(109,'Update info failed');
    success_response('Update info success',$empId);
?> 