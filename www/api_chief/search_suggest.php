<?php 
    require_once('load_emp_with_depart.php');
    //loc database theo department
    $countries = array_values($usernames);

    $result = array();

    if(isset($_GET['search_text'])){
        $result = array_filter($countries, function($country){
            $match_country = strtolower($country);
            $match_text = strtolower($_GET['search_text']);
            return str_contains($match_country, $match_text);
        });
    }
    
    echo json_encode(array_values($result));
?>