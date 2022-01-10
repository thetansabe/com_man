<?php 
    require_once('db.php');
    //add
    function add_employee($fullName,$userName,$dep,$role){
        $password = $userName;
        $hashed = password_hash($password,PASSWORD_BCRYPT);

        $sql = 'insert into 
                employeeinfo(FullName,UserName,Password,Department,Role)
                values(?,?,?,?,?)';
        
        $conn = get_connection();
        $stm = $conn->prepare($sql);
        $stm->bind_param('sssss',$fullName,$userName,$hashed,$dep,$role);
        $stm->execute();

        if($stm->affected_rows == 1)
            return $stm->insert_id;
        
        return -1;
    }

    //login
    function login($userName, $password){
        $sql = 'select * from employeeinfo where UserName = ?';
        $conn = get_connection();
        $stm = $conn->prepare($sql);
        $stm -> bind_param('s',$userName);
        $stm->execute();

        $result = $stm->get_result();

        $all_users = array();

        while(($row = $result->fetch_assoc())){
            $all_users[] = $row;
        }

        //username sai
        if(count($all_users) == 0){
            return -1; //username khong ton tai
        }

        foreach ($all_users as $user){
            if(password_verify($password,$user['Password']))
                return $user['EmpID']; // login success 
        }

        return -2; //dung username nhung password sai

    }

    //update password
    function update_password($id,$newPass){
        $hashed = password_hash($newPass,PASSWORD_BCRYPT);

        $sql = 'update employeeinfo 
                set Password = ?
                where EmpID = ?';

        $conn = get_connection();
        $stm = $conn->prepare($sql);
        $stm -> bind_param('si',$hashed,$id);
        $stm -> execute();

        if($stm->affected_rows == 1)
            return $stm->insert_id;
        
        return -1;
    }
    //login('testhashpass','testhashpas');
    
    //read employee
    function read_employee($userName,$password){
        $sql = 'select * from employeeinfo where UserName = ?';
        $conn = get_connection();
        $stm = $conn->prepare($sql);
        $stm -> bind_param('s',$userName);
        $stm->execute();

        $result = $stm->get_result();

        $all_users = array();

        while(($row = $result->fetch_assoc())){
            $all_users[] = $row;
        }
        $_SESSION['UserName'] = $userName;
        foreach ($all_users as $user){
            if(password_verify($password,$user['Password'])){
                $_SESSION['EmpID'] = $user['EmpID'];
                $_SESSION['FullName'] = $user['FullName']; //important
                $_SESSION['Email'] = $user['Email'];
                $_SESSION['Address'] = $user['Address'];
                $_SESSION['Department'] = $user['Department']; //important
                $_SESSION['DateJoined'] = $user['DateJoined'];
                $_SESSION['Age'] = $user['Age'];
                $_SESSION['Gender'] = $user['Gender'];
                $_SESSION['Phone'] = $user['Phone'];
                $_SESSION['Role'] = $user['Role']; //important
                $_SESSION['DateBirth'] = $user['DateBirth'];
                $_SESSION['ImgDir'] = $user['ImgDir']; //important
            }       
        }
    }
?>