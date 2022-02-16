var _isCompleated = 0;
var selectedIds = Array();

var _arrPopularCategory=[];
_arrPopularCategory[0] = 	"Best Picture";
_arrPopularCategory[1] = 	"Direction";

_arrPopularCategory[2] = 	"Performance in a Leading Role (Female)";
_arrPopularCategory[3] = 	"Performance in a Leading Role (Male)";

_arrPopularCategory[4] = 	"Performance in a Supporting Role (Female)";
_arrPopularCategory[5] = 	"Performance in a Supporting Role (Male)";

_arrPopularCategory[6] = 	"Music Direction";
_arrPopularCategory[7] = 	"Best Story (Original)";
_arrPopularCategory[8] = 	"Best Story (Adapted)";
_arrPopularCategory[9] = 	"Lyrics";

_arrPopularCategory[10] = 	"Playback Singer (Female)";
_arrPopularCategory[11] = 	"Playback Singer (Male)";

_arrPopularCategory[12]	= "Cinematography";
_arrPopularCategory[13]	= "Screenplay";
_arrPopularCategory[14]	= "Dialogue";
_arrPopularCategory[15]	= "Editing";
_arrPopularCategory[16]	= "Choreography";
_arrPopularCategory[17]	= "Sound Design";
_arrPopularCategory[18]	= "Sound Mixing";
_arrPopularCategory[19]	= "Background Score";
_arrPopularCategory[20]	= "Special Effects (Visuals)";
_arrPopularCategory[21]	= "Summary";

ResetselectedIDsIndex(0);
ResetselectedIDsIndex(1);
ResetselectedIDsIndex(2);
ResetselectedIDsIndex(3);
ResetselectedIDsIndex(4);
ResetselectedIDsIndex(5);
ResetselectedIDsIndex(6);
ResetselectedIDsIndex(7);
ResetselectedIDsIndex(8);
ResetselectedIDsIndex(9);
ResetselectedIDsIndex(10);
ResetselectedIDsIndex(11);
ResetselectedIDsIndex(12);
ResetselectedIDsIndex(13);
ResetselectedIDsIndex(14);
ResetselectedIDsIndex(15);
ResetselectedIDsIndex(16);
ResetselectedIDsIndex(17);
ResetselectedIDsIndex(18);
ResetselectedIDsIndex(19);
ResetselectedIDsIndex(20);

//console.log(selectedIds);

var dtBestPicture = filter(dtPopularAwards,1);
var dtDirection = filter(dtPopularAwards,2);
var dtLeadingRoleFemale = filter(dtPopularAwards,3);
var dtLeadingRoleMale = filter(dtPopularAwards,4);
var dtSupportingRoleFemale = filter(dtPopularAwards,5);
var dtSupportingRoleMale = filter(dtPopularAwards,6);
var dtMusicDirection = filter(dtPopularAwards,7);
var dtBestStory_1 = filter(dtPopularAwards,8);
var dtBestStory_2 = filter(dtPopularAwards,9);
var dtLyrics = filter(dtPopularAwards,10);
var dtPlaybackSingerFemale = filter(dtPopularAwards,11);
var dtPlaybackSingerMale = filter(dtPopularAwards,12);

var dtCinematography = filter(dtTechnicalAwards,13);
var dtScreenplay = filter(dtTechnicalAwards,14);
var dtDialogue = filter(dtTechnicalAwards,15);
var dtEditing = filter(dtTechnicalAwards,16);
var dtChoreography = filter(dtTechnicalAwards,17);
var dtSoundDesign = filter(dtTechnicalAwards,18);
var dtSoundMixing = filter(dtTechnicalAwards,19);
var dtBackgroundScore = filter(dtTechnicalAwards,20);
var dtSpecialEffects = filter(dtTechnicalAwards,21);

$(document).ready(function(){
	$(".pages").hide();
	$("#spLogout").hide();
	$("#divLogout").hide();
	
	_dtBestPicture(false,true); _showHeading(1,1);
	
	$('<audio id="errAudio"><source src="sounds/notify.ogg" type="audio/ogg"><source src="sounds/notify.mp3" type="audio/mpeg"><source src="sounds/notify.wav" type="audio/wav"></audio>').appendTo('body');
	//$('<audio id="errAudio"><source src="sounds/computer_error.ogg" type="audio/ogg"><source src="sounds/computer_error.mp3" type="audio/mpeg"><source src="sounds/computer_error.aac" type="audio/aac"></audio>').appendTo('body');
	
	//$("#lnkSelected").html("IIFA AWARDS 2022");
	$("#lnkSelected").html("POPULAR AWARDS 2022");
	
	$.alert({
		title: "<i class='text-small text-warning glyphicon glyphicon-info-sign'></i> &nbsp; GUIDELINES FOR CASTING YOUR VOTE",
		content: "<ul class='text-left'><li>There are two voting sections: <ol type='1'><li>Popular categories</li><li>Technical categories</li></ol></li><li>A voter can cast one vote for all the categories across both the sections.</li><li>It is mandatory to cast one vote for the popular category. However, the voter may choose to skip voting in any of the technical categories by clicking on the “Skip” button.</li><li>The bifurcation of the categories falling under popular and technical will be displayed before the start of the voting in each category.</li><li>A summary page shall appear after the voter has finished voting for all categories. A voter can edit the votes casted in each of the category through the summary page. However, the voter cannot skip voting in any technical category after they click on “Edit”.</li></ul>",
		confirmButton: 'Proceed',
		confirmButtonClass: 'btn-warning',
		columnClass: 'col-md-12 text-midium',
		/* icon: 'glyphicon glyphicon-info-sign', */
		animation: 'opacity',
		opacity: 0.9999,
		/* autoClose: 'confirm|50000', */
		theme: 'supervan', // 'material', 'bootstrap',black,white,supervan
	});
	
	var _canSkipThis = true;
	var _cannotSkipThis = false;
	
	//Start Page moving scripts	
	$("#btnPOPSkip_1_1").click(function(e){e.preventDefault(); $(".next_click").html("");_dtDirection(true);});$("#btnPOPNext_1_1").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[0],1)){return;} _dtDirection(false);});$("#btnPOPSubmit_1_1").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(1,_cannotSkipThis);});
	
	$("#btnPOPSkip_1_2").click(function(e){e.preventDefault(); $(".next_click").html("");_dtLeadingRoleFemale(true);	_showHeading(1,3);});$("#btnPOPNext_1_2").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[1],2)){return;} 		_dtLeadingRoleFemale(false);	_showHeading(1,3);});	$("#btnPOPSubmit_1_2").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(2,_canSkipThis);});
	$("#btnPOPSkip_1_3").click(function(e){e.preventDefault(); $(".next_click").html("");_dtLeadingRoleMale(true);		_showHeading(1,4);});$("#btnPOPNext_1_3").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[2],3)){return;}			_dtLeadingRoleMale(false);		_showHeading(1,4);});	$("#btnPOPSubmit_1_3").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(3,_canSkipThis);});
	
	$("#btnPOPSkip_1_4").click(function(e){e.preventDefault(); $(".next_click").html("");_dtSupportingRoleFemale(true);	_showHeading(1,5);});$("#btnPOPNext_1_4").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[3],4)){return;} 		_dtSupportingRoleFemale(false);_showHeading(1,5);});	$("#btnPOPSubmit_1_4").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(4,_canSkipThis);}); 
	$("#btnPOPSkip_1_5").click(function(e){e.preventDefault(); $(".next_click").html("");_dtSupportingRoleMale(true);	_showHeading(1,6);});$("#btnPOPNext_1_5").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[4],5)){return;} 		_dtSupportingRoleMale(false);	_showHeading(1,6);});	$("#btnPOPSubmit_1_5").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(5,_canSkipThis);});
	
	$("#btnPOPSkip_1_6").click(function(e){e.preventDefault(); $(".next_click").html("");_dtMusicDirection(true);		_showHeading(1,7);}); $("#btnPOPNext_1_6").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[5],6)){return;} 		_dtMusicDirection(false);		_showHeading(1,7);});	$("#btnPOPSubmit_1_6").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(6,_canSkipThis);});
	
	$("#btnPOPSkip_1_7").click(function(e){e.preventDefault(); $(".next_click").html("");_dtBestStory_1(true);			_showHeading(1,8);}); $("#btnPOPNext_1_7").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[6],7)){return;} 		_dtBestStory_1(false);			_showHeading(1,8);});	$("#btnPOPSubmit_1_7").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(7,_canSkipThis);});
	$("#btnPOPSkip_1_8").click(function(e){e.preventDefault(); $(".next_click").html("");_dtBestStory_2(true);			_showHeading(1,9);}); $("#btnPOPNext_1_8").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[7],8)){return;} 		_dtBestStory_2(false);			_showHeading(1,9);});	$("#btnPOPSubmit_1_8").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(8,_canSkipThis);});
	
	$("#btnPOPSkip_1_9").click(function(e){e.preventDefault(); $(".next_click").html("");_dtLyrics(true);				_showHeading(1,10);}); $("#btnPOPNext_1_9").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[8],9)){return;} 		_dtLyrics(false);				_showHeading(1,10);});  $("#btnPOPSubmit_1_9").click(function(e){e.preventDefault(); $(".next_click").html("");	_SummaryPopularCategory(9,_canSkipThis);});
	
	$("#btnPOPSkip_1_10").click(function(e){e.preventDefault(); $(".next_click").html("");_dtPlaybackSingerFemale(true);_showHeading(1,11);});$("#btnPOPNext_1_10").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[9],10)){return;} 		_dtPlaybackSingerFemale(false);	_showHeading(1,11);});$("#btnPOPSubmit_1_10").click(function(e){e.preventDefault(); $(".next_click").html(""); _SummaryPopularCategory(10,_canSkipThis);});
	$("#btnPOPSkip_1_11").click(function(e){e.preventDefault(); $(".next_click").html("");_dtPlaybackSingerMale(true);  _showHeading(1,12);}); $("#btnPOPNext_1_11").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[10],11)){return;} 	_dtPlaybackSingerMale(false);	_showHeading(1,12);});$("#btnPOPSubmit_1_11").click(function(e){e.preventDefault(); $(".next_click").html(""); _SummaryPopularCategory(11,_canSkipThis);});
	
	//Can put only one vote
	$("#btnPOPSkip_1_12").click(function(e){e.preventDefault(); $(".next_click").html("");_dtCinematography(true,true);	_showHeading(1,13);}); $("#btnPOPNext_1_12").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[11],12)){return;} 	_dtCinematography(false,true);_showHeading(1,13);});$("#btnPOPSubmit_1_12").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(12,_canSkipThis);});
	$("#btnPOPSkip_1_13").click(function(e){e.preventDefault(); $(".next_click").html("");_dtScreenplay(true);			_showHeading(1,14);}); $("#btnPOPNext_1_13").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[12],13)){return;} 	_dtScreenplay(false);		  _showHeading(1,14);});$("#btnPOPSubmit_1_13").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(13,_canSkipThis);});
	$("#btnPOPSkip_1_14").click(function(e){e.preventDefault(); $(".next_click").html("");_dtDialogue(true);			_showHeading(1,15);}); $("#btnPOPNext_1_14").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[13],14)){return;} 	_dtDialogue(false);			  _showHeading(1,15);});$("#btnPOPSubmit_1_14").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(14,_canSkipThis);});
	$("#btnPOPSkip_1_15").click(function(e){e.preventDefault(); $(".next_click").html("");_dtEditing(true);				_showHeading(1,16);}); $("#btnPOPNext_1_15").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[14],15)){return;} 	_dtEditing(false);			  _showHeading(1,16);});$("#btnPOPSubmit_1_15").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(15,_canSkipThis);});
	$("#btnPOPSkip_1_16").click(function(e){e.preventDefault(); $(".next_click").html("");_dtChoreography(true);		_showHeading(1,17);}); $("#btnPOPNext_1_16").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[15],16)){return;} 	_dtChoreography(false);		  _showHeading(1,17);});$("#btnPOPSubmit_1_16").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(16,_canSkipThis);});
	$("#btnPOPSkip_1_17").click(function(e){e.preventDefault(); $(".next_click").html("");_dtSoundDesign(true);			_showHeading(1,18);}); $("#btnPOPNext_1_17").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[16],17)){return;} 	_dtSoundDesign(false);		  _showHeading(1,18);});$("#btnPOPSubmit_1_17").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(17,_canSkipThis);});
																																																																													  
	$("#btnPOPSkip_1_18").click(function(e){e.preventDefault(); $(".next_click").html("");_dtSoundMixing(true);			_showHeading(1,19);}); $("#btnPOPNext_1_18").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[17],18)){return;} 	_dtSoundMixing(false);		  _showHeading(1,19);});$("#btnPOPSubmit_1_18").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(18,_canSkipThis);});
	$("#btnPOPSkip_1_19").click(function(e){e.preventDefault(); $(".next_click").html("");_dtBackgroundScore(true);		_showHeading(1,20);}); $("#btnPOPNext_1_19").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[18],19)){return;} 	_dtBackgroundScore(false);	  _showHeading(1,20);});$("#btnPOPSubmit_1_19").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(19,_canSkipThis);});
	$("#btnPOPSkip_1_20").click(function(e){e.preventDefault(); $(".next_click").html("");_dtSpecialEffects(true);		_showHeading(1,21);}); $("#btnPOPNext_1_20").click(function(e){e.preventDefault(); $(".next_click").html(""); if(_verification(selectedIds[19],20)){return;} 	_dtSpecialEffects(false);	  _showHeading(1,21);});$("#btnPOPSubmit_1_20").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(20,_canSkipThis);});
	
	//SUmmary Add/Edit/Update
	$("#btnPOPSkip_1_21").click(function(e){e.preventDefault(); $(".next_click").html("");
		_SummaryPopularCategory2(21,_canSkipThis);}); 
	$("#btnPOPNext_1_21").click(function(e){e.preventDefault(); $(".next_click").html(""); 
	if(_verification(selectedIds[20],21)){return;} 
		_SummaryPopularCategory(21,_cannotSkipThis);_showHeading(1,22);});
	$("#btnPOPSubmit_1_21").click(function(e){e.preventDefault(); $(".next_click").html("");_SummaryPopularCategory(21,_canSkipThis);});
	
	//Ends Page moving scripts	
	
	$("#btnPOPConfirm").click(function(e){
		e.preventDefault(); $(".next_click").html("");
		var _canSubmit = false;
		
		//console.log(selectedIds);
		var listArr = Array();
		for(i=0;i<selectedIds.length;i++){
			for(j=0;j<selectedIds[i].length;j++){
				//console.log(selectedIds[i][j].length);
				var itemX =Array();
				for(x=1;x<selectedIds[i][j].length-4;x++){
					itemX.push(selectedIds[i][j][x]);
				}
				listArr.push(itemX);
				_canSubmit = true;
			}
			if(i == selectedIds.length-1){
				if(_canSubmit ==true){//console.log(listArr);
					call2Save(listArr);
				}else{
					$(".next_click").html("Please choose any");return;
				}
			}
		}
		
	});
	
	$("#btnLogout").click(function(e){
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "logout.php",
			data: "",
			cache: false,
			success: function(jsonMSG){
				//console.log(jsonMSG.Errors);
			}
		});
		location.href = "index.php";
	});
	
	$("#btnLogout2").click(function(e){
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "logout.php",
			data: "",
			cache: false,
			success: function(jsonMSG){
				//console.log(jsonMSG.Errors);
			}
		});
		location.href = "index.php";
	});
});

//$.notify.defaults({ className: "error" });

function filter(_array,_pageIndex){
	
	var length = _array.length;
	var _filteredArray = new Array();
	for(var j = 0; j < length; j++)
	{
 if(_array[j][3] == _pageIndex)
 {
 _filteredArray.push(_array[j]);
 }
 }
	//console.log(_filteredArray);
	return _filteredArray;
}

function _verification(_array,_pageIndex){
	var _requireTwo = false;
	//if((_pageIndex <= 11) && (_array.length < 1)){_requireTwo = true;}
	var _alertMsgs = "PLEASE SELECT AN ENTRY (Only One)";
	if(_pageIndex > 12){_alertMsgs = "PLEASE SELECT AN ENTRY (Only One)";}
	
	//if((_pageIndex < 8) && (_array[0][1] == 0) || (_requireTwo) || (_array.length >= 3)){
	//console.log(_pageIndex);
	/* console.log(_array[0][1]);
	console.log(_array.length);
	console.log(_requireTwo); */
	
	if((_array[0][1] == 0) || (_requireTwo) || (_array.length >= 3)){
		$(".next_click").html("<span class='small'>"+_alertMsgs+"</span>");
		$.notify(_alertMsgs);
		$('#errAudio')[0].play();
		return true;
	}else{return false;}
}

function _blockMultipleCheck(_array,_pageIndex,_selItemCnt){
	var _alertMsgs = "PLEASE SELECT AN ENTRY (Only One)";
	if(_pageIndex > 12){_alertMsgs = "PLEASE SELECT AN ENTRY (Only One)";}
	$(".next_click").html("<span class='small'>"+_alertMsgs+"</span>");
	$.notify(_alertMsgs);
	$('#errAudio')[0].play();
}

// function _callAlert(_errType){
// 	var _alertMsgs = "Please choose Min 1 & Max 2 entry only";
// 	//if(_pageIndex <= 11){}else if(_pageIndex > 11){_alertMsgs = "Please choose only 1 entry";}
// 	_alertMsgs = "<span class='small'>"+_alertMsgs+"</span>";
// 	$(".next_click").html(_alertMsgs);
// 	$.notify(_alertMsgs);
// 	$('#errAudio')[0].play();
// }

function _showHeading(_category,_pageIndex){
	if(_pageIndex<=12)
		$("#lnkSelected").html("POPULAR AWARDS 2022");
	else
		$("#lnkSelected").html("TECHNICAL AWARDS 2022");
		
	//Shows alert always 
	//for Popular - Updated for V2
	if(_pageIndex>21){
		$(".next_click").html("");
		$("div.toolbar2").html("Summary");
	}else{
		var _alertMsgs = "PLEASE SELECT AN ENTRY (Only One)";
		if(_pageIndex > 12){_alertMsgs = "PLEASE SELECT AN ENTRY (Only One)";}
		$(".next_click").html("<span class='small'>"+_alertMsgs+"</span>");
		$("div.toolbar2").html(_pageIndex + ". "+ _arrPopularCategory[_pageIndex-1]);
	}
	$("html,body").animate({scrollTop:$(".thetop").offset().top},"2000");return false;
}

function _editItem(_recID,_category,_pageIndex){
	
	if(_pageIndex<=12)
		$("#lnkSelected").html("POPULAR AWARDS 2022");
	else
		$("#lnkSelected").html("TECHNICAL AWARDS 2022");
		
	$("div.toolbar2").html(_pageIndex + ". "+ _arrPopularCategory[_pageIndex-1]);		
	
	$("#AddNew_" + _category + "_"+_pageIndex).hide();
	$("#AddEdit_" + _category + "_"+_pageIndex).show();
	
	//$("#Page_Summary_"+ _category).hide();
	$("#Page_Summary_1").hide();
	$("#Page_" + _category + "_"+_pageIndex).show();
	
	//console.log(_pageIndex);
	//for V2
	//divertEditOption(_pageIndex);
}
function divertEditOption(_pageIndex){
	//POPULAR CATEGORY
	if(_pageIndex==1)_dtBestPicture(false,false);
	if(_pageIndex==2)_dtDirection(false);
	if(_pageIndex==3)_dtLeadingRoleFemale(false);
	if(_pageIndex==4)_dtLeadingRoleMale(false);
	if(_pageIndex==5)_dtSupportingRoleFemale(false);
	if(_pageIndex==6)_dtSupportingRoleMale(false);
	if(_pageIndex==7)_dtMusicDirection(false);
	
	if(_pageIndex==8)_dtBestStory_1(false);
	if(_pageIndex==9)_dtBestStory_2(false);
	
	if(_pageIndex==10)_dtLyrics(false);
	
	if(_pageIndex==11)_dtPlaybackSingerFemale(false);
	if(_pageIndex==12)_dtPlaybackSingerMale(false);

	// TECHNICAL CATEGORY
	if(_pageIndex==13)_dtCinematography(false,false);
	if(_pageIndex==14)_dtScreenplay(false);
	if(_pageIndex==15)_dtDialogue(false);
	if(_pageIndex==16)_dtEditing(false);
	if(_pageIndex==17)_dtChoreography(false);
	if(_pageIndex==18)_dtSoundDesign(false);
	if(_pageIndex==19)_dtSoundMixing(false);
	if(_pageIndex==20)_dtBackgroundScore(false);
	if(_pageIndex==21)_dtSpecialEffects(false);
	
}

function call2Save(listArr){
	$.confirm({
		title: 'Kindly note:',
		content: 'The votes once submitted shall not be editable. Are you sure you want to submit?',
		confirmButton: 'Proceed',
		confirmButtonClass: 'btn-warning',//btn-primary btn-inverse btn-warning btn-info btn-danger btn-success
		cancelButtonClass: 'btn-danger',
		icon: 'glyphicon glyphicon-info-sign',
		animation: 'rotateX',// Available animations: right, left, bottom, top, rotate, none, opacity, scale, zoom,scaleY, scaleX, rotateY, rotateYR (reverse), rotateX, rotateXR (reverse)
		animationBounce: 2.5, // default is 1.2 whereas 1 is no bounce.
		animationClose: 'rotate',
		//autoClose: 'confirm|10000',
		opacity: 0.5,
		theme: 'material', // 'material', 'bootstrap',black,white,supervan
		backgroundDismiss: true,
		confirm: function () {
			_savePopularCategory(listArr,13);
		}
	});
}

//selectedIds
function _savePopularCategory(listArr,_pageIndex){
	//var _canSubmit = false;
	$(".next_click").html("Processing..........");
 var jsonString = JSON.stringify(listArr);
	//console.log(jsonString); 
	$.ajax({
 type: "POST",
		dataType: 'json',
 url: "savepopular.php",
 data: {data : jsonString},
 cache: false,
 success: function(jsonMSG){
 //console.log(jsonMSG.Errors);
			$(".next_click").html(jsonMSG.Errors);
			if(jsonMSG.Errors == "") {
				$("#Page_Summary_1").hide();
				_isCompleated = _isCompleated+1;
				$("#btnPopular2").hide();
				$("#divPopular2").hide();
				$("#Page_Final").show();
				
				_isCompleated=2;
				
				if(_isCompleated == 2){
					$("#divLogout").show();
					$("#spLogout").show();
					$(".toolbar2").html("IIFA AWARDS 2022");
					window.setInterval(function () {var iTimeRemaining = $("#spLogout").html(); iTimeRemaining = eval(iTimeRemaining); if (iTimeRemaining <= 0) {location.href = "logout.php";}else{$("#spLogout").html(iTimeRemaining - 1);}}, 1000);
				}
				
				}else{
				$(".next_click").html(jsonMSG.Errors);return;
			}
		},
		fail:function(error){
			console.log(error);
			$(".next_click").html(error);return;
		}
	});
}

function _verifyLogin(){
$.ajax({
 type: "GET",
 dataType: 'json',
 url: "checkLogin.php",
 data: "",
 cache: false,
 success: function(jsonMSG){
			console.log(jsonMSG);
			if(jsonMSG.Errors == "") {
				location.href = "index.php";
			}
			$("#lblUserDetails").html(jsonMSG.userName);
		},
		fail:function(error){
			console.log(error);
			location.href = "index.php";
			return;
		}
	});
}