<?php
if(!isset( $_SESSION)) {session_start();}
$logFileDate = date("Ymd"); 
ini_set("log_errors", 1);
ini_set("error_log", "errlog/php-error" . $logFileDate . ".log");

date_default_timezone_set('Asia/Kolkata');
ini_set('display_errors','off');
ini_set('error_reporting',0);
 
?>