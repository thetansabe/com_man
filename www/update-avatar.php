<?php 
    header('Content-Type: application/json');
    require_once('const.php');
    require_once('db.php');
    require_once('session_start.php');
    require_once('response_msg.php');
    

    if(isset($_FILES['avatar'])){
        $file = $_FILES['avatar']; //mang chua thong tin anh
        $name = $file['name'];
        $size = $file['size'];
        $tmp_path = $file['tmp_name'];
        $type = $file['type'];

        $ext = pathinfo($name, PATHINFO_EXTENSION);
        $allowed_extension = array("png","jpg","jpeg");
        //chan upload file xau tu post man
        if(!in_array($ext,$allowed_extension))
            error_response(107,'Can not upload file');

        //luu vao thu muc uploads
        $dest = $_SERVER['DOCUMENT_ROOT'].'/uploads/'.$name;
        $avatar_update_status = move_uploaded_file($tmp_path,$dest);
        //var_dump($avatar_update_status);

        //update database ImgDir
        
        $relative_img_path = 'uploads/'.$name ;
        $sql = 'update employeeinfo set ImgDir = ? where EmpID = ?';
        $conn = get_connection();
        $stm = $conn->prepare($sql);
        $stm -> bind_param('si',$relative_img_path,$empId);
        $stm->execute();

        if($stm->affected_rows == 1){
            success_response('Update avatar successfully',$empId);
        }   
        else
            error_response(108,'Upload avatar failed');

    }
    
    
?>