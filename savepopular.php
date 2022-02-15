<?php 
if(!isset( $_SESSION)) {session_start();}
$userID =isset($_SESSION['WI16_ID']) ?  $_SESSION['WI16_ID'] : "0";
//session_write_close();

$array = array('Errors' => '');
$errors = false;

if($_POST)
{
	$regDateTime=time ();
	$Error = false;
	include_once("dbConn.php");
	
	if($Error == true)	{
		$array['Errors'] ="Could not connect database";
	}else{
		$dataVal = "";
		$data = json_decode(stripslashes($_POST['data']));
		
		foreach($data as $d){
			if($d[0]>0){
				if ($dataVal !=""){
					$dataVal = $dataVal . ",";
				}
				$dataVal = $dataVal . "(" . $d[0] . "," . $d[1] . "," . $d[2] . "," . $userID  . "," . $regDateTime . ")";
			}
		}
		
		/* foreach($data as $d){
			if($d[1]>0){
				if ($dataVal !=""){
					$dataVal = $dataVal . ",";
				}
				$dataVal = $dataVal . "(" . $d[1] . "," . $d[2] . "," . $d[3] . "," . $userID  . "," . $regDateTime . ")";
			}
		} */
		
		$SQLQuery="INSERT INTO iifapopular (precID,pCatID,pSubCatID,pUserid,pdatetime) values $dataVal";
		$result=$mysqli->query($SQLQuery);	
		if($result)
		{
			$array['Errors'] = "";
			$SQLQuery="UPDATE iifavoters SET v_IsActivated = 0,v_submittedon=$regDateTime WHERE v_ID=$userID";
			$mysqli->query($SQLQuery);	
		}else{
			$array['Errors'] = "Nothing to submit, Please try again!";
		}
	}
	$mysqli->close();
}else{
	$array['Errors'] = 'Please enter all the required field!';
}

echo json_encode($array);
die();
?>
