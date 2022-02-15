function _SummaryPopularCategory2(_pageIndex,_isSkiped){
		ResetselectedIDsIndex(_pageIndex-1);
		_SummaryPopularCategory(_pageIndex,_isSkiped);
}

function _SummaryPopularCategory(_pageIndex,_isSkiped){
	
	if(!_isSkiped){
		if(_verification(selectedIds[_pageIndex-1],_pageIndex)){return;}
	}
	
	$("#Page_1_"+_pageIndex).hide();
	$("#AddEdit_1_"+_pageIndex).hide();
	$("#Page_Summary_1").show();
	
	var listArr = Array();
	for(i=0;i<selectedIds.length;i++){
		for(j=0;j<selectedIds[i].length;j++){
			listArr.push(selectedIds[i][j]);
		}
		if(i == selectedIds.length-1){
			call2FillPreview(listArr);
		}
	}
}

function ResetselectedIDsIndex(_index){
	var tempArr =  ["",0,1,_index+1,_arrPopularCategory[_index],"","",""];
	selectedIds[_index] = Array();
	selectedIds[_index].push(tempArr);
}

function call2FillPreview(listArr){	
	
	$("#lnkSelected").html("IIFA AWARDS 2020");
	
	var dt_Table = $('#dtSummaryPopularCategory').DataTable( {
		"dom": "<'row'<'col-sm-12'<'toolbar'>>><'row'<'col-sm-12'tr>>",
		//"initComplete": function(settings, json) {$('body').find('.dataTables_scrollBody').addClass("scrollbar");},
		"ordering": false,
		"info": false,"bPaginate": false,
		"sScrollY": '50vh', "sScrollX": "100%", "bScrollCollapse": true,
		"bAutoWidth": false,"bFilter": false,
		"bDestroy": true,"processing": true,
		"columnDefs": [{ 
							"visible": false, 
							"targets": [1,2,3],
							"searchable": false
					 },{
						"render": function ( data, type, row ) {
							//console.log("XX :  " + data);
							//console.log(row[1] + ":" + row[2] + ":" + row[3] );
							if(row[1]>0){
								return "<span class='icon-round pointer glyphicon glyphicon-pencil' onclick='javascript: _editItem(\"" + row[1] + "\",\"" + row[2] + "\",\"" + row[3] + "\");'></span>";
							}else{
								return "<span class='icon-round pointer glyphicon glyphicon-plus' onclick='javascript: _editItem(\"" + row[1] + "\",\"" + row[2] + "\",\"" + row[3] + "\");'></span>";
							}
						 },
							"targets": 0,
							"searchable": false,
							"ordering": false
					},{ width: '1%', targets: 0 },{ width: '25%', targets: 4 },{ width: '35%', targets: 5 }],
		 tableTools: {
            "sRowSelect": "single"
        },
		"data": listArr,
		 "columns": [
			{"class": "text-center","orderable": false, "data": null,"defaultContent": "",title: "EDIT"},
			{ title: "ID" },
			{ title: "CATEGORYID" },
			{ title: "SUB-CATEGORY" },
			{ title: "Category" },
			{ title: "Entry" },
			{ title: "Song" },
			{ title: "Film" }
		]
	});
	$("div.toolbar2").html("Summary");
	
}