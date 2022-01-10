<?php 
    
    require_once('funtions_chief.php');
    require_once('session_start.php');

    $infos = load_info($empId);
    
    $getName = $infos['FullName'];
    $getEmail = $infos['Email'];
    $getAddress = $infos['Address'];
    $getDepartment = $infos['Department'];
    $getDateJoin = $infos['DateJoined'];
    $getAge = $infos['Age'];
    $getGender = $infos['Gender'];
    $getPhone = $infos['Phone'];
    $getRole = $infos['Role'];
    $getDateBirth = $infos['DateBirth'];
    $getImg = $infos['ImgDir'];

    //die(json_encode($infos))
?>