function _SummaryTechnicalCategory(_pageIndex,_isSkiped){
	//$("#Page_2_14").hide();
	$("#Page_2_"+_pageIndex).hide();
	$("#AddEdit_2_"+_pageIndex).hide();
	
	$("#Page_Summary_2").show();
	//$("#lnkSelected").html("TECHNICAL AWARDS > Summary");
	
	if(_isSkiped){
		var tempArr =  ["",0,2,14,"Make Up","","",""];
		selectedTechnicalIds[13] = tempArr;
		$('input:radio[name="rdoMakeup"]').prop('checked', false);
		$('#dtMakeup tbody tr').removeClass('rowSelected');		
	}
	
	//console.log(selectedTechnicalIds);
	
	var dt_Table = $('#dtSummaryTechnicalCategory').DataTable( {
		"dom": "<'row'<'col-sm-12'<'toolbar2'>>><'row'<'col-sm-12'tr>>",
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
							//console.log(row[1] + row[3] );
							if(row[1]>0){
								return "<span class='icon-round pointer glyphicon glyphicon-pencil' onclick='javascript: _editItem(\"" + row[1] + "\",\"" + row[2] + "\",\"" + row[3] + "\");'></span>";
							}else{
								return "<span class='icon-round pointer glyphicon glyphicon-plus' onclick='javascript: _editItem(\"" + row[1] + "\",\"" + row[2] + "\",\"" + row[3] + "\");'></span>";
							}
						 },
							"targets": 0,
							"searchable": false,
							"ordering": false
					},{ width: '4%', targets: 0 },{ width: '25%', targets: 4 },{ width: '35%', targets: 5 }],
		 tableTools: {
            "sRowSelect": "single"
        },
		"data": selectedTechnicalIds,
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