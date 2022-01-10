<?php 
    function error_response($code,$msg){
        $res = array();
        $res['code'] = $code;
        $res['message'] = $msg;

        die(json_encode($res));
    }

    function success_response($msg,$id){
        // $id la id cua thang thanh cong
        $res = array();
        
        $res['code'] = 0;
        $res['message'] = $msg;
        $res['affectedId'] = $id;
        
        die(json_encode($res));
    }
?>