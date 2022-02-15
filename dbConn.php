<?php
$mysql_hostname = "localhost";
//$mysql_hostname = "148.66.138.105";
/* $mysql_user = "wizadmin";
$mysql_password = "6SJnk6{T7dO0";
$mysql_database = "wizapp2020"; */

//UPDATE `iifavoters` SET `v_AccessCode`=LEFT(MD5(RAND()), 6);
//UPDATE `iifavoters` SET `v_Name`='',`v_SurName`='',`v_IDCardName`='0.png',`v_submittedon`=0,`v_IsActivated`=1,`v_LoginTime`=0

$mysql_user = "root";
$mysql_password = "root";
$mysql_database = "iifa2018";

$Error = false;
$mysqli = new mysqli($mysql_hostname, $mysql_user, $mysql_password, $mysql_database);
if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  $Error = true;
}
?>