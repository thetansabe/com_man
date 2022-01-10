<?php 
    session_start();
    
    if(!isset($_SESSION['FullName']) || !isset($_SESSION['Department']) || !isset($_SESSION['Role']))
        header("Location: ../login_page.html");
    
    $fullName = $_SESSION['FullName'];
    $empId = $_SESSION['EmpID'];
    $email = $_SESSION['Email'];
    $address = $_SESSION['Address'];
    $department = $_SESSION['Department'];
    $dateJoined = $_SESSION['DateJoined'];
    $age = $_SESSION['Age'];
    $gender = $_SESSION['Gender'];
    $phone = $_SESSION['Phone'];
    $role = $_SESSION['Role'];
    $dateBirth = $_SESSION['DateBirth'];
    $imgDir = $_SESSION['ImgDir'];
    $userName = $_SESSION['UserName'];
?>