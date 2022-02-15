function _dtDirection(_isSkiped){
	
	/* ADDED FOR V2 */
	_showHeading(1,2);
	$("#Page_1_1").hide();
	$("#Page_1_2").show();
	
	if(_isSkiped){
		var tempArr = ["",0,1,1,"Best Picture","","",""];
		selectedIds[0] = Array();
		selectedIds[0].push(tempArr);
		$('input:checkbox[name="rdoBestPicture"]').prop('checked', false);
		$('#dtBestPicture tbody tr').removeClass('rowSelected');

	}

	var dt_Table = $('#dtDirection').DataTable( {
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
		"data": dtDirection,
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
						
						_datalinkCheck +='<input class="option-input checkbox" id="'+ data[0] +'" type="checkbox" value="'+ data[0] +'" name="rdoDirection" />';
						_datalinkCheck +='<label id="'+ data[0] +'"></label>';
						$('td', row).eq(0).html(_datalinkCheck);
		}
	} );
	 
//$('#dtDirection tbody').on('click','tr', function (e) {
$('#dtDirection tbody').on('click','input[type="checkbox"]', function (e) {
		var $row = $(this).closest('tr');
		 if ( $(this).hasClass('rowSelected') ) {
			$row.removeClass('rowSelected');
		}else {
			dt_Table.$('tr.rowSelected').removeClass('rowSelected');
			$row.addClass('rowSelected');
		}
		
		var _pageIndex = 2;
		ResetselectedIDsIndex(_pageIndex-1);
		 var selectedElement = Array();var _selItemCnt = 0;
		 $(dt_Table.$('input[type="checkbox"]:checked').map(function(){
			 var $row = $(this).closest('tr');
			 var data = dt_Table.row($row).data();
			 var _dataArr = [data[0],data[1],data[2],data[3],"Direction",data[4],data[5],data[6]];
			 if(_selItemCnt<1)if(_selItemCnt<1)selectedElement.push(_dataArr);_selItemCnt=_selItemCnt+1;
			}));
		 if(selectedElement.length>0)selectedIds[_pageIndex-1]=selectedElement;
		 console.log(selectedIds);
		 if(_selItemCnt>1){_blockMultipleCheck(selectedElement,_pageIndex);return false;}
		 
 });
 
 
}