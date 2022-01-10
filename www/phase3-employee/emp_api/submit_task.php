<?php 
    header('Content-Type: application/json');
    require_once('../../response_msg.php');
    require_once('../function_emp.php');
    
    $file = '';
    $text = '';

    if(isset($_POST['TaskID'])){
        $text = $_POST['content'];

        if(isset($_FILES['file-upload'])){
            $errors= array();
            $file_name = $_FILES['file-upload']['name'];
            $file_size =$_FILES['file-upload']['size'];
            $file_tmp =$_FILES['file-upload']['tmp_name'];
            $file_type=$_FILES['file-upload']['type'];
      
            $temp = explode('.',$_FILES['file-upload']['name']);
            $file_ext=strtolower(end($temp));
            
            $extensions= array("exe","msi","sh");
            //khong cho upload file thuc thi
            if(in_array($file_ext,$extensions)=== true){
               $errors[]="extension not allowed, do not choose executable file";
            }
            //khong cho up file > 500 MB
            if($file_size > 524288000){
               $errors[]='File size must be under 500 MB';
            }
            
            if(empty($errors)==true){
               move_uploaded_file($file_tmp,"../../uploads/".$file_name);
               $file = "uploads/".$file_name;
            }else{
               print_r($errors);
            }
        }   
    
        $res = submit_task($_POST['TaskID'],$file,$text);

        if($res == -1) error_response(113,'Submit Failed');

        success_response('Submit Task Successfully',$res);
    }

    

?>