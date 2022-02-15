<?php
// You need to add server side validation and better error handling here

$data = array();
$regDateTime=time ();
if(isset($_FILES['file']))
{  
	$fname = $_FILES['file']['name'];
	$fextention = substr($fname, strrpos($fname, ".") + 1);
	$fextention = strtolower($fextention);
	
	$rndno = mt_rand();
	if(isset($_POST['rndno'])){
		$rndno = ($_POST['rndno'] !="") ? $_POST['rndno']: $rndno;
	}
	$uploadedFileName = $rndno.$regDateTime.'.'. $fextention;
	
    move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/'.$uploadedFileName);
	$data = array('success' => 'Form was submitted', 'filename' => $uploadedFileName,'rndno'=>$rndno);
}
else
{
    $data = array('success' => 'Form was submitted', 'filename' => '0.png');
}

echo json_encode($data);
?>