function _dtBestStory_1(_isSkiped){
	/* ADDED FOR V2 */
	

var _slPrev = 6;	
var _slCurrent = 7;	
var _slNext = 8;	//Same for the next click function too need to update
	
	_showHeading(1,_slNext);
	$("#Page_1_"+_slCurrent).hide();
	$("#Page_1_"+_slNext).show();

	if(_isSkiped){
		var tempArr = ["",0,1,_slCurrent,"Music Direction","","",""];
		selectedIds[_slPrev] = Array();
		selectedIds[_slPrev].push(tempArr);
		$('input:checkbox[name="rdoMusicDirection"]').prop('checked', false);
		$('#dtMusicDirection tbody tr').removeClass('rowSelected');
	 }

	var dt_Table = $('#dtBestStory_1').DataTable( {
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
		
		"data": dtBestStory_1,
		 "columns": [
			{"class": "","orderable": false, "data": null,"defaultContent": ""},
			{ title: "ID" },
			{ title: "CATEGORY" },
			{ title: "SUB-CATEGORY" },
			{ title: "Entries" },
			{ title: "Songs2" },
			{ title: "Film" }
		],
		"order": [[6, 'asc']],
		"createdRow": function ( row, data, index ) {
						var _datalinkCheck ='';
						
						_datalinkCheck +='<input class="option-input checkbox" id="'+ data[0] +'" type="checkbox" value="'+ data[0] +'" name="rdoBestStory_1" />';
						_datalinkCheck +='<label id="'+ data[0] +'"></label>';
						$('td', row).eq(0).html(_datalinkCheck);
		}
	} );
	
	//$("div.toolbar").html("Best Story");

	//$('#dtBestStory_1 tbody').on('click','tr', function () {
	$('#dtBestStory_1 tbody').on('click','input[type="checkbox"]', function (e) {
		if ( $(this).hasClass('rowSelected') ) {
			$(this).removeClass('rowSelected');
		}else {
			$(this).addClass('rowSelected');
		}
		var _slNext = 8;
		ResetselectedIDsIndex(_slNext-1);
		 var selectedElement = Array();var _selItemCnt = 0;
		 $(dt_Table.$('input[type="checkbox"]:checked').map(function(){
			 var $row = $(this).closest('tr');
			 var data = dt_Table.row($row).data();
			 var _dataArr = [data[0],data[1],data[2],data[3],"Best Story (Original)",data[4],data[5],data[6]];
			 if(_selItemCnt<1)selectedElement.push(_dataArr);_selItemCnt=_selItemCnt+1;
		 }));
		 
		if(selectedElement.length>0)selectedIds[_slNext-1]=selectedElement;
 		if(_selItemCnt>1){_blockMultipleCheck(selectedElement,_slNext);return false;}

 });
}