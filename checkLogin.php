<?php 
if(!isset( $_SESSION)) {session_start();}

$userID =isset($_SESSION['WI16_ID']) ?  $_SESSION['WI16_ID'] : "";

$userSurName =isset($_SESSION['WI16_SUR_NAME']) ?  $_SESSION['WI16_SUR_NAME'] : "";
$userName =isset($_SESSION['WI16_NAME']) ?  $_SESSION['WI16_NAME'] : "";

$array = array('Errors' => '');
$errors = false;
$array['userSurName'] = $userSurName;
$array['userName'] = $userName;
$array['userID'] = $userID;
$array['Errors'] = $userID;

session_write_close();
echo json_encode($array);
die();
?>