<?php 
    require_once('session_start.php');
    require_once('load-info.php');
    $imgDir = $getImg;
    $fullName = $getName;
    $email = $getEmail;
    $age = $getAge;
    $phone = $getPhone;
    $address = $getAddress;
    $gender = $getGender;
    $dateJoined = $getDateJoin;
    $dateBirth = $getDateBirth;
    if(strtolower($role) != 'chief') die('You dont have permission to access this page!');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chief Page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <div class="container-fluid chief-page">
        <div class="row">
            <div class="col-md-2 chief-page_left col-sm-0 left-side">
                <div class="img-holder">
                    <img src=<?= $imgDir ?> alt="avatar" class="avatar-img">
                </div>

                <h3 class="employee-name text-white mt-2"><?= $fullName ?></h3>
                <h6 class="employee-role text-white ">Role: 
                    <span class="employee-role_title"><?= $role ?></span>
                </h6>
                <h6 class="employee-role text-white mb-4">Department: 
                    <span class="employee-department_title"><?= $department ?></span>
                </h6>

                <div class="chief-page_left-navbar_item left-side_item" id="update-info">
                    <i class="fas fa-pen-square text-white"></i>
                    <a href="http://localhost:8080/chief_update-info.php" class="text-white chief-page_left-title left-side_title" >Update Info</a>
                </div>

                <div class="chief-page_left-navbar_item left-side_item mt-2" id="tasks-management">
                    <i class="fas fa-briefcase text-white"></i>
                    <a href="http://localhost:8080/chief_task.php" class="text-white chief-page_left-title left-side_title" >Tasks Management</a>
                </div>

                <div class="chief-page_left-navbar_item left-side_item mt-3" id="attendence">
                    <i class="fas fa-calendar-week text-white"></i>
                    <a href="http://localhost:8080/chief_absent.php" class="text-white chief-page_left-title left-side_title" >Attendence</a>
                </div>

                <div class="chief-page_left-navbar_item left-side_item mt-3" id="attendence">
                    <i class="fas fa-calendar-week text-white"></i>
                    <a href="http://localhost:8080/chief_attendence-manage.php" class="text-white chief-page_left-title left-side_title" >Absent Requests</a>
                </div>

                <div class="chief-page_left-navbar_item left-side_item mt-3" id="log-out">
                    <i class="fas fa-sign-out-alt text-white"></i>
                    <a href="http://localhost:8080/login_page.html" class="text-white chief-page_left-title left-side_title" >Log Out</a>
                </div>
            </div>
    
            <div class="col-md-10 chief-page_right col-sm-12 right-side">
                <div class="navbar">
                    <div class="dropdown">
                        <div class="btn btn-secondary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-bars"></i>
                        </div>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#" id="update-info">
                            <a href="http://localhost:8080/chief_update-info.php" class=" chief-page_left-title left-side_title" >Update Info</a>
                          </a>
                          <a class="dropdown-item" href="#" id="tasks-management">
                            <a href="http://localhost:8080/chief_task.php" class=" chief-page_left-title left-side_title" >Tasks Management</a>
                          </a>
                          <a class="dropdown-item" href="#" id="attendence">
                            <a href="http://localhost:8080/chief_absent.php" class=" chief-page_left-title left-side_title" >Attendence</a>
                          </a>
                          <a class="dropdown-item" href="#" id="attendence">
                            <a href="http://localhost:8080/chief_attendence-manage.php" class=" chief-page_left-title left-side_title" >Absent Requests</a>
                          </a>
                          <a class="dropdown-item" href="#" id="log-out">
                            <a href="http://localhost:8080/login_page.html" class=" chief-page_left-title left-side_title" >Log out</a>
                          </a>
                        </div>
                    </div>
                </div>