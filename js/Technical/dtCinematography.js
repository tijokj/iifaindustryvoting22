function _dtCinematography(_isSkiped,_showDesc){

console.log(_showDesc);
if(_showDesc){
	$.alert({
		title:'Technical Awards',
		content: "<ol class='text-left text-sm'><li>Cinematography</li><li>Screenplay</li><li>Dialogue</li><li>Editing</li><li>Choreography (<i>with Name of Song</i>)</li><li>Sound Design</li><li>Sound Mixing</li><li>Background Score</li><li>Special Effects (Visuals)</li></ol>",
		confirmButton:'Proceed',
		confirmButtonClass:'btn-warning',
		columnClass:'col-md-push-3 col-md-6 text-sm',
		icon:'glyphicon glyphicon-film',
		animation:'opacity',
		opacity: 0.999,
		/* autoClose:'confirm|25000', */
		theme:'material', //'material','bootstrap',black,white,supervan
	});
}

	/* ADDED FOR V2 */
	_showHeading(1,12);
	$("#Page_1_11").hide();
	$("#Page_1_12").show();
	
	if(_isSkiped){
		var tempArr = ["",0,1,11,"Playback Singer(Female)","","",""];
		selectedIds[10] = Array();
		selectedIds[10].push(tempArr);
		$('input:checkbox[name="rdoPlaybackSingerFeMale"]').prop('checked', false);
		$('#dtPlaybackSingerFeMale tbody tr').removeClass('rowSelected');
	}
	
	var dt_Table = $('#dtCinematography').DataTable( {
		"dom": "<'row'<'col-sm-9'<'toolbar'>><'col-sm-3'f>><'row'<'col-sm-12'tr>>",
		//"initComplete": function(settings, json) {$('body').find('.dataTables_scrollBody').addClass("scrollbar");},
		//"ordering": false,
		"info": false,"bPaginate": false,
		"sScrollY":'50vh', "sScrollX": "100%", "bScrollCollapse": true,
		"bAutoWidth": false,
		"bDestroy": true,"processing": true,
		"columnDefs": [{ 
							"visible": false, 
							"targets": [1,2,3,5], 
							"searchable": false
					 },{ width:'4%', targets: 0 },{ width:'50%', targets: 4 }],
		
		"data": dtCinematography,
		 "columns": [
			{"class": "","orderable": false, "data": null,"defaultContent": ""},
			{ title: "ID" },
			{ title: "CATEGORY" },
			{ title: "SUB-CATEGORY" },
			{ title: "Entry" },
			{ title: "Song2" },
			{ title: "Film" }
		],
		"order": [[6, 'asc']],
		"createdRow": function ( row, data, index ) {
						var _datalinkCheck ='';
						//_datalinkCheck +='	<label>';
						_datalinkCheck +='<input class="option-input checkbox" id="'+ data[0] +'" type="checkbox" value="'+ data[0] +'" name="rdoCinematography" />';
						_datalinkCheck +='<label id="'+ data[0] +'"></label>';
						$('td', row).eq(0).html(_datalinkCheck);
		}
	} );


	//$('#dtCinematography tbody').on('click','tr', function () {
	$('#dtCinematography tbody').on('click','input[type="checkbox"]', function (e) {	
		var $row = $(this).closest('tr');
		if ( $(this).hasClass('rowSelected') ) {
			$row.removeClass('rowSelected');
		}else {
			dt_Table.$('tr.rowSelected').removeClass('rowSelected');
			$row.addClass('rowSelected');
		}		
		 
		var _pageIndex = 12;
		ResetselectedIDsIndex(_pageIndex-1);
		var selectedElement = Array();var _selItemCnt = 0;
		$(dt_Table.$('input[type="checkbox"]:checked').map(function(){
			 var $row = $(this).closest('tr');
			 var data = dt_Table.row($row).data();
			 var _dataArr = [data[0],data[1],data[2],data[3],"Cinematography",data[4],data[5],data[6]];
			 if(_selItemCnt<1)selectedElement.push(_dataArr);_selItemCnt=_selItemCnt+1;
		 }));
		 if(selectedElement.length>0)selectedIds[_pageIndex-1]=selectedElement;
		 if(_selItemCnt>1){_blockMultipleCheck(selectedElement,_pageIndex);return false;}		
		 
 });
}