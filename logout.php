<?php
if(!isset( $_SESSION)) {session_start();}
$_SESSION = array();
session_unset();     // unset $_SESSION variable for the run-time 
session_destroy();   // destroy session data in storage
session_write_close(); //now close it, 
header("location:index.html");
exit();
//print "You have been logged out. <a href='index.php'>Go back</a>";
?>	