function _dtBestPicture(_isSkiped,_showDesc){
console.log(_showDesc);	

if(_showDesc){
	$.alert({
		title:'Popular Awards',
		content: "<ol class='text-left text-sm'><li>Best Picture</li><li>Direction</li><li>Leading Role-Female</li><li>Leading Role-Male</li><li>Supporting Role-Female</li><li>Supporting Role-Male</li><li>Music Direction</li><li>Best Story (Original)</li><li>Best Story (Adapted)</li><li>Lyrics (<i>with Name of Song</i>)</li><li>Playback Singer-Female (<i>with Name of Song</i>)</li><li>Playback Singer-Male (<i>with Name of Song</i>)</li></ol>",
		confirmButton:'Proceed',
		confirmButtonClass:'btn-warning',
		columnClass:'col-md-push-3 col-md-6 text-sm',
		icon:'glyphicon glyphicon-film',
		animation:'opacity',
		opacity: 0.999,
		/* autoClose:'confirm|40000', */
		theme:'material', //'material','bootstrap',black,white,supervan
	});
}
	/* ADDED FOR V2 */
	_showHeading(1,1);
	$("#Page_1_1").show();
	
	var dt_Table = $('#dtBestPicture').DataTable( {
		"dom": "<'row'<'col-sm-9'<'toolbar'>><'col-sm-3'f>><'row'<'col-sm-12'tr>>",
		//"language": {"search": ""},//"initComplete": function(settings, json) {$('body').find('.dataTables_scrollBody').addClass("scrollbar");},//"ordering": false,
		"info": false,"bPaginate": false,
		"sScrollY":'50vh', "sScrollX": "100%", "bScrollCollapse": true,
		"bAutoWidth": false,
		"bDestroy": true,"processing": true,
		"columnDefs": [{ 
							"visible": false, 
							"targets": [1,2,3,5], 
							"searchable": false
					 },{ width:'4%', targets: 0 },{ width:'48%', targets: 4 }],
		"tableTools": { "sRowSelect": "single" },
		"data": dtBestPicture,
		 "columns": [
			{"class": "","orderable": false , "data": null,"defaultContent": ""},
			{ title: "ID" },
			{ title: "CATEGORY" },
			{ title: "SUB-CATEGORY" },
			{ title: "Entry" },
			{ title: "Songs2" },
			{ title: "Film"}
		],
		"order": [[6, 'asc']],
		"createdRow": function ( row, data, index ) {
			//console.log(data[0]);
			var _datalinkCheck ='';			
			_datalinkCheck +='<input class="option-input checkbox" id="'+ data[0] +'" type="checkbox" value="'+ data[0] +'" name="rdoBestPicture" />';			
			_datalinkCheck +='<label id="'+ data[0] +'"></label>';
			$('td', row).eq(0).html(_datalinkCheck);
		}
	});
	
	 //$("div.toolbar").html("Best Picture");
	 
	 //$('#dtBestPicture tbody').on('click','tr', function (e) {
	 $('#dtBestPicture tbody').on('click','input[type="checkbox"]', function (e) {
		 var $row = $(this).closest('tr');
		 if ( $(this).hasClass('rowSelected') ) {
			$row.removeClass('rowSelected');
		}else {
			dt_Table.$('tr.rowSelected').removeClass('rowSelected');
			$row.addClass('rowSelected');
		}
		var _slCurrent = 1;
		ResetselectedIDsIndex(_slCurrent-1);
		var selectedElement = Array();var _selItemCnt = 0;

	//$("#dtBestPicture .checkbox:checked").map(function() {
	$(dt_Table.$('input[type="checkbox"]:checked').map(function(){
			 var $row = $(this).closest('tr');
			 var data = dt_Table.row($row).data();
			 console.log(data[0]);
			 var _dataArr = [data[0],data[1],data[2],data[3],"Best Picture",data[4],data[5],data[6]];
			 if(_selItemCnt<1)selectedElement.push(_dataArr);_selItemCnt=_selItemCnt+1;
		}));
		if(selectedElement.length>0)selectedIds[_slCurrent-1]=selectedElement;
		console.log(selectedIds);
		if(_selItemCnt>1){_blockMultipleCheck(selectedElement,_slCurrent);return false;}
 });
	 
}
