
$(document).ready(function(){

$('#btnSubmit').attr('disabled',true);
$('#btnSubmit').addClass('btn-disabled');

var files;
$('input[type=file]').on('change', prepareUpload);
function prepareUpload(event)
{
	event.preventDefault();
	files = event.target.files[0];

console.log(files.name);	

	var isValidFile = isItImageFile(files.name);
	
	if(!isValidFile){
		$('.txtFileName').html("Invalid Image, Please use images with 'jpg,jpeg,png,gif'");
		return false;
	}
	
	
	var formData = new FormData();
	formData.append('file', files);
	formData.append('rndno', $("#txtPassword").val());
	console.log(formData);
	$('.txtFileName').html("Uploading, please wait..");
	
  $.ajax({
    type: 'POST',
    cache: false,
    /* contentType: 'multipart/form-data', */
	dataType: 'json',
    processData: false,
    contentType: false,
	url:"upload.php",
    data: formData,
    success: function(data) {
      console.log(data);
	  $('#txtFileName').val(data.filename);
	  $('.txtFileName').html("'Association card' uploaded successfully.");
	  $('#btnSubmit').removeAttr('disabled');
	  $('#btnSubmit').removeClass('btn-disabled');
	}
  });
}


	$('#divProgress').hide();
	
	 $("#btnSubmit").click(function(e){
		e.preventDefault();
		
		$("#btnSubmit").html("Processing....");
		$('#divProgress').show();
		try{
		    var _isError = false;
			var _isFocused = false;
			$('.error-block').html("");
			
			if($('#txtName').val() ==""){
				 $('.txtName').html("Please enter your name");
				  _isError = true;
			}						
			if(_isError == true && _isFocused == false ) {_isFocused =true; $('#txtName').focus();}
			
			if($('#txtSurName').val() ==""){
				 $('.txtSurName').html("Please enter your sur name");
				  _isError = true;
			}
			if(_isError == true && _isFocused == false ) {_isFocused =true; $('#txtSurName').focus();}

			if($('#txtPassword').val() ==""){
				 $('.txtPassword').html("Please enter your Access Code");
				 _isError = true;
			}	
			if(_isError == true && _isFocused == false ) {_isFocused =true; $('#txtPassword').focus();}
			
			if($('#txtFileName').val() ==""){
				$('.txtFileName').html("Please upload a picture of your industry card here");
				  _isError = true;
			}
			if(_isError == true && _isFocused == false ) {_isFocused =true; $('#txtFileName').focus();}
			
			if(_isError == true){
				$("#btnSubmit").html("Submit");
				$('#divProgress').hide();
				return false;
			}else{
				
			var postdata = {
					"txtName": $('#txtName').val(),
					"txtSurName": $('#txtSurName').val(),
					"txtPassword": $('#txtPassword').val(),
					"txtFileName": $('#txtFileName').val(),
				};
				console.log(postdata);
				$.ajax({
                url: "submit.php",
                type: "POST",
				data: postdata,
				dataType: 'json',
                cache: false,
                success: function(jsonMSG) {
					console.log(jsonMSG);
					$("#btnSubmit").html("Submit");
					$('#divProgress').hide();
					if(jsonMSG.Errors == '') {
						$("#btnSubmit").html("Success");
						// Success message
						$('#success').html("<div class='col-sm-offset-4 alert alert-success'>");
						// $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
							// .append("</button>");
						$('#success > .alert-success')
							.append("<strong>Thank you, redirecting to voting engine....<span id='spnSeconds'>2</span> </strong>");
						$('#success > .alert-success')
							.append('</div>');

						//clear all fields
						$('#frmContact').trigger("reset");
						
						var _interval = window.setInterval(function () {var iTimeRemaining = $("#spnSeconds").html(); iTimeRemaining = eval(iTimeRemaining); if (iTimeRemaining <= 0) {
								console.log('redirect');
								clearInterval(_interval);
								location.href = "home.php";
							}else{$("#spnSeconds").html(iTimeRemaining - 1);}}, 500);
						
						return false;
					}else{
						$("#btnSubmit").html("Submit");
						// Fail message
						$('#success').html("<div class='col-sm-offset-4 alert alert-danger'>");
						$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
							.append("</button>");
						$('#success > .alert-danger').append(jsonMSG.Errors);
						$('#success > .alert-danger').append('</div>');
						//clear all fields
						//$('#frmContact').trigger("reset");
						return false;
					}
                },
                error: function(dataVal) {
					$("#btnSubmit").html("Submit");
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("Sorry for the inconvenience!, Please try again later.");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    //$('#frmContact').trigger("reset");
                },
            })
			}
			
			return false;
		}catch(_err){alert(_err);}
     });
	
});


function isItImageFile(fileName) {
    var extension = fileName.substr( (fileName.lastIndexOf('.') +1) );
    switch(extension) {
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
            return true;
        break;
        case 'zip':
        case 'rar':
            return false;
        break;
        case 'pdf':
            return false;
        break;
        default:
            return false;
    }
};
