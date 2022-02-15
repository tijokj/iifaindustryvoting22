
<?php 

	require_once("config.php");
	require_once("dbConn.php");

	$regDateTime=time ();
	
    $minno = 1001; 
	$maxno = 3001; 
	$cnt=1;
	for($rndcode = $minno;$rndcode<$maxno;$rndcode++){
		
		$cnt++;
		if($cnt>500){
			$mysqli->close();
			exit();
			} 
		
		
		$rndcode = rand($minno,$maxno);
		echo($rndcode);echo('<br/>');		
		$SQLQuery="INSERT INTO iifavoters (v_AccessCode) values ($rndcode);";
		//echo $SQLQuery;echo('<br/>');		
		$result=$mysqli->query($SQLQuery);
		
	}
	$mysqli->close();
	
	echo('<br/>');		
	echo('<br/>');		
	echo('Compleated');
	
?>
