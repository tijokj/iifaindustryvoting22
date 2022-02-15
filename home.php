<?php
	$datetime = date("YmdHms");
?>

<!DOCTYPE html>
<html lang="en">
	
	<head>
		
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">
		
		<title>IIFA</title>
		
		<!-- Bootstrap Core CSS -->
		<link href="css/bootstrap.css" rel="stylesheet">
		
		<!-- datatable -->
		<link href="css/dataTables.bootstrap.css" rel="stylesheet">
		
		<!-- Custom CSS -->
		<link href="css/main.css?v=<?php echo $datetime;?>" rel="stylesheet">
		<link href="css/cursor.css" rel="stylesheet">
		
		<!-- favicon -->
		<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
		<link rel="icon" href="images/favicon.png" type="image/x-icon">	
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/favicon.png">
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/favicon.png">
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/favicon.png">
		<link rel="apple-touch-icon-precomposed" sizes="32x32" href="images/favicon-32x32.png">
		<link rel="apple-touch-icon-precomposed" sizes="16x16" href="images/favicon-16x16.png">
		<link rel="apple-touch-icon-precomposed" href="images/favicon.png">
		
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	
	<body onload="_verifyLogin()" class='thetop'>
		
		<!-- Navigation -->
		<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<a class="navbar-brand" href="#">
						IIFA AWARDS 2020
					</a>
				</div>
				
				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav navbar-right">
						<li class="active"><a id="btnLogout2" href="./logout.php">
							<i class='glyphicon glyphicon-log-out'></i>
						</a></li>
					</ul>
				</div>
			</div>
		</nav>
		
		<!-- Page Content -->
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-2 col-md-3 text-center">
					<img src="images/logo-m.jpg" class="img-responsive" style="width:125px;height:auto;" alt="IIFA AWARDS 2020">
				</div>
				<div class="col-sm-6 col-md-6 text-center">
					<a class="gradiant-txt" id="lnkSelected">IIFA AWARDS 2020</a>
				</div>
			</div>
			
			<div class="row"><div class="col-sm-12 col-md-12 text-center">
			<div class="h3 toolbar2 hidden-xs">IIFA AWARDS</div>
			</div></div>
			
			
			<div class="pages" id="Page_1_1"><div class="row"><div class="col-sm-12"><table id="dtBestPicture" class="dtPopular table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div>
			<div class="row AddNew" id="AddNew_1_1"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_1" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_1" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div>
			<div class="row AddEdit" id="AddEdit_1_1"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_1" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			
			<div class="pages" id="Page_1_2"><div class="row"><div class="col-sm-12"><table id="dtDirection" class="dtPopular dtDirection table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_2"><div class="col-sm-12 text-right">  <!-- <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_2" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_2" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_2"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_2" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			
			<div class="pages" id="Page_1_3"><div class="row"><div class="col-sm-12"><table id="dtLeadingRoleFemale" class="dtPopular dtLeadingRoleFemale table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_3"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_3" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_3" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_3"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_3" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_4"><div class="row"><div class="col-sm-12"><table id="dtLeadingRoleMale" class="dtPopular dtLeadingRoleMale table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_4"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_4" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_4" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_4"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_4" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			
			<div class="pages" id="Page_1_5"><div class="row"><div class="col-sm-12"><table id="dtSupportingRoleFemale" class="dtPopular dtSupportingRoleFemale table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_5"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_5" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_5" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_5"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_5" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_6"><div class="row"><div class="col-sm-12"><table id="dtSupportingRoleMale" class="dtPopular dtSupportingRoleMale table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_6"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_6" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_6" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_6"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_6" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			
			<div class="pages" id="Page_1_7"><div class="row"><div class="col-sm-12"><table id="dtMusicDirection" class="dtPopular dtMusicDirection table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_7"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_7" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_7" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_7"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_7" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_8"><div class="row"><div class="col-sm-12"><table id="dtBestStory" class="dtPopular dtBestStory table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_8"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_8" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_8" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_8"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_8" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			
			<div class="pages" id="Page_1_9"><div class="row"><div class="col-sm-12"><table id="dtLyrics" class="dtPopular dtLyrics table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_9"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_9" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_9" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_9"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_9" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			
			<div class="pages" id="Page_1_10"><div class="row"><div class="col-sm-12"><table id="dtPlaybackSingerMale" class="dtPopular dtPlaybackSingerMale table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_10"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_10" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_10" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_10"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_10" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_11"><div class="row"><div class="col-sm-12"><table id="dtPlaybackSingerFemale" class="dtPopular dtPlaybackSingerFemale table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_11"><div class="col-sm-12 text-right"> <!--<button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_11" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button> -->  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_11" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_11"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_11" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>

			<!-- Below are not mandatory, and can have skip button -->
			
			<div class="pages" id="Page_1_12"><div class="row"><div class="col-sm-12"><table id="dtCinematography" class="dtPopular dtCinematography table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_12"><div class="col-sm-12 text-right"> <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_12" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button>  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_12" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_12"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_12" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_13"><div class="row"><div class="col-sm-12"><table id="dtScreenplay" class="dtPopular dtScreenplay table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_13"><div class="col-sm-12 text-right"> <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_13" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button>  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_13" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_13"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_13" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_14"><div class="row"><div class="col-sm-12"><table id="dtDialogue" class="dtPopular dtDialogue table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_14"><div class="col-sm-12 text-right"> <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_14" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button>  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_14" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_14"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_14" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_15"><div class="row"><div class="col-sm-12"><table id="dtEditing" class="dtPopular dtEditing table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_15"><div class="col-sm-12 text-right"> <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_15" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button>  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_15" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_15"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_15" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			
			<div class="pages" id="Page_1_16"><div class="row"><div class="col-sm-12"><table id="dtChoreography" class="dtPopular dtChoreography table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="row AddNew" id="AddNew_1_16"><div class="col-sm-12 text-right"> <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_16" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button>  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_16" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_16"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_16" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			
			<div class="pages" id="Page_1_17"><div class="row"><div class="col-sm-12"><table id="dtSoundDesign" class="dtPopular dtSoundDesign table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div>			<div class="row AddNew" id="AddNew_1_17"><div class="col-sm-12 text-right"> <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_17" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button>  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_17" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_17"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_17" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_18"><div class="row"><div class="col-sm-12"><table id="dtSoundMixing" class="dtPopular dtSoundMixing table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div>			<div class="row AddNew" id="AddNew_1_18"><div class="col-sm-12 text-right"> <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_18" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button>  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_18" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_18"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_18" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_19"><div class="row"><div class="col-sm-12"><table id="dtBackgroundScore" class="dtPopular dtBackgroundScore table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div>	<div class="row AddNew" id="AddNew_1_19"><div class="col-sm-12 text-right"> <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_19" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button>  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_19" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_19"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_19" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>
			<div class="pages" id="Page_1_20"><div class="row"><div class="col-sm-12"><table id="dtSpecialEffects" class="dtPopular dtSpecialEffects table table-striped" cellspacing="0" width="100%"><tr><th>O</th><th>ID</th><th>CATEGORY</th><th>SUB-CATEGORY</th><th>Entry</th><th>Song2</th><th>Name</th></tr></table></div></div><div class="clearfix">&nbsp;</div><div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div>	<div class="row AddNew" id="AddNew_1_20"><div class="col-sm-12 text-right"> <button class="btn iifa-gradiant btn-lg btnPOPSkip" id="btnPOPSkip_1_20" type="button">Skip&nbsp;<i class='glyphicon glyphicon-chevron-right'></i></button>  <button class="btn iifa-gradiant btn-lg btnPOPNext" id="btnPOPNext_1_20" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div><div class="row AddEdit" id="AddEdit_1_20"><div class="col-sm-12 text-right"><button class="btn iifa-gradiant btn-lg btnPOPSubmit" id="btnPOPSubmit_1_20" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button></div></div></div>	
			
			<div class="pages" id="Page_Summary_1">
				<div class="row">
					<div class="col-sm-12">
						<table id="dtSummaryPopularCategory" class="dtPopular table table-striped" cellspacing="0" width="100%">
							<tr>
								<th>O</th>
								<th>ID</th>
								<th>CATEGORYID</th>
								<th>SUB-CATEGORY</th>
								<th>CATEGORY</th>
								<th>Entry</th>
								<th>Song</th>
								<th>Name</th>
							</tr>
						</table>
					</div>
				</div>
				<div class="clearfix">&nbsp;</div>
				<div class="row">
					<div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div>
					<div class="col-sm-2 text-right">
						<button class="btn iifa-gradiant btn-lg" id="btnPOPConfirm" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button>
					</div>
				</div>
			</div>
			
			<!-- 
			<div class="pages" id="Page_Summary_2">
				<div class="row">
				<div class="col-sm-12">
				<table id="dtSummaryTechnicalCategory" class="dtTechnical table table-striped" cellspacing="0" width="100%">
				<tr>
				<th>O</th>
				<th>ID</th>
				<th>CATEGORYID</th>
				<th>SUB-CATEGORY</th>
				<th>CATEGORY</th>
				<th>Entry</th>
				<th>Song</th>
				<th>Name</th>
				</tr>
				</table>
				</div>
				</div>
				<div class="clearfix">&nbsp;</div>
				<div class="row">
				<div class="col-sm-offset-1 col-sm-9 text-right"><span class="error-block-big next_click"></span></div><div class="col-sm-2">
				<button class="btn iifa-gradiant btn-lg" id="btnTECHConfirm" type="button">Submit&nbsp;<i class='glyphicon glyphicon-ok'></i></button>
				</div>
				</div>
			</div> 
			-->
			
			<!-- <div class="col-sm-12 text-right">
				<span class="error-block-big next_click">Please choose Min 1 &amp; Max 2 entry only</span>
			</div> -->

			<div class="pages" id="Page_Final">
				<div class="clearfix">&nbsp;</div>	
				<div class="row">
					<div class="col-sm-12 text-center">
						<h1 class="gradiant-txt"><span id="lblUserDetails"></span>, Thank you for your vote.</h1>
					</div>
				</div>
				
				<div class="clearfix">&nbsp;</div>
				<div class="row">
					<div class="col-sm-12 text-center">
						<button class="btn iifa-gradiant btn-lg" id="btnLogout" type="button">Logout &nbsp;<i class='glyphicon glyphicon-log-out'></i></button>
						<br/><br/> <div id="divLogout">Signing off by <span id="spLogout">10</span> sec</div>
					</div>
				</div>
				<div class="trophy2">
					<img src="images/trophies.gif" width="90">
				</div>
				
			</div>
			
			
		</div>
		
		<!-- jQuery Version 1.11.1 -->
		<script src="js/jquery.min.js"></script>
		
		<!-- Bootstrap Core JavaScript -->
		<script src="js/bootstrap.min.js"></script>
		
		<!-- Data table plugins -->
		<script src="js/jquery.dataTables.js"></script>
		
		<!-- <script src="js/dataTables.responsive.js"></script>
		<script src="js/datatables.tabletools.js"></script> -->
		<script src="js/dataTables.responsive.js"></script>
		
		<!-- 
		<link href="alertigo/jquery-alertigo.css" rel="stylesheet" type="text/css">
		<script src="alertigo/jquery-alertigo.js"></script>
		-->
		<!--		
		<script type="text/javascript" src="js/jquery.bootstrap-growl.js"></script>
		-->
		
		<script src="js/notify.js"></script>
		
		<!-- jquery-confirm files -->
		<link rel="stylesheet" type="text/css" href="JQC/jquery-confirm.css" />
		<script type="text/javascript" src="JQC/jquery-confirm.js"></script>
		
		<script src="js/Popular/dtBestPicture.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Popular/dtDirection.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Popular/dtLeadingRoleMale.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Popular/dtLeadingRoleFemale.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Popular/dtSupportingRoleMale.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Popular/dtSupportingRoleFemale.js?v=<?php echo $datetime;?>"></script>
		
		<script src="js/Popular/dtMusicDirection.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Popular/dtBestStory.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Popular/dtLyrics.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Popular/dtPlaybackSingerMale.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Popular/dtPlaybackSingerFemale.js?v=<?php echo $datetime;?>"></script>
		
		<script src="js/Technical/dtCinematography.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Technical/dtScreenplay.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Technical/dtDialogue.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Technical/dtEditing.js?v=<?php echo $datetime;?>"></script>
		
		<script src="js/Technical/dtChoreography.js?v=<?php echo $datetime;?>"></script>
		
		<script src="js/Technical/dtSoundDesign.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Technical/dtSoundMixing.js?v=<?php echo $datetime;?>"></script>
		
		<script src="js/Technical/dtBackgroundScore.js?v=<?php echo $datetime;?>"></script>
		<script src="js/Technical/dtSpecialEffects.js?v=<?php echo $datetime;?>"></script>
		
		<script src="js/summaryPopularCategory.js?v=<?php echo $datetime;?>"></script>
		<!-- <script src="js/summaryTechnicalCategory.js"></script> -->
		
		<script src="js/PopularAwards.js?v=<?php echo $datetime;?>"></script>
		<script src="js/TechnicalAwards.js?v=<?php echo $datetime;?>"></script>
		<script src="js/main.js?v=<?php echo $datetime;?>"></script>
	</body>
	
</html>
