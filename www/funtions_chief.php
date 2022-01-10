<?php 
    require_once('db.php');

    function add_task($taskTitle,$deadline,$assignTo,$taskDesc,$department){
        $defaultStatus = 'New';
        
        $sql = 'insert into 
                taskmanagement(TaskTitle,TaskDesc,Deadline,Status,AssignTo,Department)
                values(?,?,?,?,?,?)';
        
        $conn = get_connection();
        $stm = $conn->prepare($sql);
        $stm->bind_param('ssssss',$taskTitle,$taskDesc,$deadline,$defaultStatus,$assignTo,$department);
        $stm->execute();

        if($stm->affected_rows == 1)
            return $stm->insert_id;
        
        return -1;
    }

    function update_info($empId,$email,$fullname,$age,$phone,$address,$gender,$dateJoin,$dateBirth){
        $sql = 'update employeeinfo 
        set Email = ? , FullName = ? , Address = ? , DateJoined = ? , Age = ? , Gender = ? , Phone = ? , DateBirth = ?
        where EmpID = ?';

        $conn = get_connection();
        $stm = $conn->prepare($sql);
        $stm->bind_param('ssssisssi',$email,$fullname,$address,$dateJoin,$age,$gender,$phone,$dateBirth,$empId);
        $stm->execute();

        if($stm->affected_rows == 1)
            return $stm->insert_id;
        
        return -1;
    }

    function load_info($empId){
        $sql = "select * from employeeinfo where EmpID = $empId";
        
        $conn = get_connection();
        $res = $conn->query($sql);
        
        return $res->fetch_assoc();
    }

    function load_task($department){
        $sql = "select * from taskmanagement where Department = ?";

        $conn = get_connection();

        $stm = $conn->prepare($sql);
        $stm->bind_param('s',$department);
        $stm->execute();

        $result = $stm->get_result();
        $ouput = array();

        while(($row = $result->fetch_assoc()))
            $ouput[] = $row;

        return $ouput;
    }
    
    function load_emp_with_depart($department){
        $sql = "select * from employeeinfo where Department = ?";
        
        $conn = get_connection();
        
        $stm = $conn->prepare($sql);
        $stm->bind_param('s',$department);
        $stm->execute();

        $result = $stm->get_result();
        
        $ouput = array();

        while(($row = $result->fetch_assoc()))
            $ouput[] = $row;
        return $ouput;
    }

    function delete_task($taskId){
        $sql = "DELETE FROM taskmanagement WHERE TaskID = ?";

        $conn = get_connection();

        $stm = $conn->prepare($sql);
        $stm->bind_param('i',$taskId);
        $stm->execute();

        if($stm->affected_rows == 1)
            return $taskId;

        return -1;
    }

    function cancel_task($taskId){
        $sql = "update taskmanagement set Status = 'Canceled' where TaskID = ?";

        $conn = get_connection();

        $stm = $conn->prepare($sql);
        $stm->bind_param('i',$taskId);
        $stm->execute();

        if($stm->affected_rows == 1)
            return $taskId;

        return -1;
    }

    function approve_task($taskId,$rate){
        $sql = "update taskmanagement set Status = 'Completed', CompleteLevel = ? where TaskID = ?";

        $conn = get_connection();

        $stm = $conn->prepare($sql);
        $stm->bind_param('si',$rate,$taskId);
        $stm->execute();

        if($stm->affected_rows == 1)
            return $taskId;

        return -1;
    }

    function reject_task($taskId,$newDead,$note){
        $sql = "update taskmanagement set Status = 'Rejected', Deadline = ?, Note = ? where TaskID = ?";

        $conn = get_connection();

        $stm = $conn->prepare($sql);
        $stm->bind_param('ssi',$newDead,$note,$taskId);
        $stm->execute();

        if($stm->affected_rows == 1)
            return $taskId;

        return -1;
    }

    function load_absent_requests($department){
        $sql = "select * from absentmanagement where Role = 0 and Department = ?";

        $conn = get_connection();

        $stm = $conn->prepare($sql);
        $stm->bind_param('s',$department);
        $stm->execute();

        $ouput = array();

        $result = $stm->get_result();

        while($row = $result->fetch_assoc()){
            $ouput[] = $row;
        }

        return $ouput;
    }

    function approve_absent_request($absentid){
        $sql = "update absentmanagement set Status = 'approved' where AbsID = ?";

        $conn = get_connection();

        $stm = $conn->prepare($sql);
        $stm->bind_param('i',$absentid);
        $stm->execute();

        if($stm->affected_rows == 1) return $absentid;
        return -1;
    }

    function reject_absent_request($absentid){
        $sql = "update absentmanagement set Status = 'refused' where AbsID = ?";

        $conn = get_connection();

        $stm = $conn->prepare($sql);
        $stm->bind_param('i',$absentid);
        $stm->execute();

        if($stm->affected_rows == 1) return $absentid;
        return -1;
    }
?>