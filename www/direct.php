<?php 
    require_once('session_start.php');
    
    $lwRole = strtolower($role);

    if($lwRole == 'chief' )
        header('Location: chief_update-info.php');
    
    if($lwRole == 'employee')
        header('Location: phase3-employee/employee_task.php');

    if($lwRole == 'admin')
        header('Location: phase2-admin/index.php');
?>