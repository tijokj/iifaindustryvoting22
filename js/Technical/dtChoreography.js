function _dtChoreography(_isSkiped){
	/* ADDED FOR V2 */
	_showHeading(1,16);
	
	$("#Page_1_15").hide();
	$("#Page_1_16").show();
	//$("#lnkSelected").html("TECHNICAL AWARDS <i class='glyphicon glyphicon-chevron-right'></i> Choreography");
	if(_isSkiped){
		var tempArr = ["",0,1,15,"Editing","","",""];
		selectedIds[14] = Array();
		selectedIds[14].push(tempArr);
		$('input:checkbox[name="rdoEditing"]').prop('checked', false);
		$('#dtEditing tbody tr').removeClass('rowSelected');
	}else{}
	
	var dt_Table = $('#dtChoreography').DataTable( {
		"dom": "<'row'<'col-sm-9'<'toolbar'>><'col-sm-3'f>><'row'<'col-sm-12'tr>>",
		//"initComplete": function(settings, json) {$('body').find('.dataTables_scrollBody').addClass("scrollbar");},
		//"ordering": false,
		"info": false,"bPaginate": false,
		"sScrollY":'50vh', "sScrollX": "100%", "bScrollCollapse": true,
		"bAutoWidth": false,
		"bDestroy": true,"processing": true,
		"columnDefs": [{ 
			"visible": false, 
			"targets": [1,2,3], 
			"searchable": false
		},{ width:'4%', targets: 0 },{ width:'35%', targets: 4 },{ width:'35%', targets: 5 }],
		"data": dtChoreography,
		"columns": [
			{"class": "","orderable": false, "data": null,"defaultContent": ""},
		{ title: "ID" },
		{ title: "CATEGORY" },
		{ title: "SUB-CATEGORY" },
		{ title: "Entry" },
		{ title: "Song" },
		{ title: "Film" }
		],
		"order": [[6, 'asc']],
		"createdRow": function ( row, data, index ) {
		var _datalinkCheck ='';
		//_datalinkCheck +='	<label>';
		_datalinkCheck +='<input class="option-input checkbox" id="'+ data[0] +'" type="checkbox" value="'+ data[0] +'" name="rdoChoreography" />';
		_datalinkCheck +='<label id="'+ data[0] +'"></label>';
		$('td', row).eq(0).html(_datalinkCheck);
		}
		} );
		//$('#dtChoreography tbody').on('click','tr', function () {
		$('#dtChoreography tbody').on('click','input[type="checkbox"]', function (e) {		
		var $row = $(this).closest('tr');
		if ( $(this).hasClass('rowSelected') ) {
		$row.removeClass('rowSelected');
		}else {
		dt_Table.$('tr.rowSelected').removeClass('rowSelected');
		$row.addClass('rowSelected');
		}		
		
		var _pageIndex = 16;
		ResetselectedIDsIndex(_pageIndex-1);
		var selectedElement = Array();var _selItemCnt = 0;
		$(dt_Table.$('input[type="checkbox"]:checked').map(function(){
		var $row = $(this).closest('tr');
		var data = dt_Table.row($row).data();
		var _dataArr = [data[0],data[1],data[2],data[3],"Choreography",data[4],data[5],data[6]];
		if(_selItemCnt<1)selectedElement.push(_dataArr);_selItemCnt=_selItemCnt+1;
		}));
		if(selectedElement.length>0)selectedIds[_pageIndex-1]=selectedElement;
		if(_selItemCnt>1){_blockMultipleCheck(selectedElement,_pageIndex);return false;}
		
		});
		}		