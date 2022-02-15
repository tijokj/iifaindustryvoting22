/* var recordsArr = Array();
var listArr = Array();
var _dataArr = Array();
_dataArr.push(['row1',1,1,1,"Best Picture"]);
_dataArr.push(['row2',2,1,1,"Best Picture"]);
_dataArr.push(['row2',2,1,1,"Best Picture"]);

recordsArr[0] = _dataArr;

console.log(recordsArr);

for(i=0;i<recordsArr.length;i++){
	console.log(recordsArr[i].length);
	for(j=0;j<recordsArr[i].length;j++){
		listArr.push(recordsArr[i][j]);
	}
}

console.log(listArr); */

function _SummaryPopularCategory(_pageIndex,_isSkiped){
	//$("#Page_1_13").hide();
	$("#Page_1_"+_pageIndex).hide();
	$("#AddEdit_1_"+_pageIndex).hide();
	$("#Page_Summary_1").show();
	//$("#lnkSelected").html("POPULAR AWARDS > Summary");
		
	if(_isSkiped){
		var tempArr =  ["",0,1,19,"Special Effects"];
		selectedIds[18] = {tempArr};
		$('input:checkbox[name="rdoSpecialEffects"]').prop('checked', false);
		$('#dtSpecialEffects tbody tr').removeClass('rowSelected');
	}
	
	var listArr = Array();
	for(i=0;i<selectedIds.length;i++){
		for(j=0;j<selectedIds[i].length;j++){
			listArr.push(selectedIds[i][j]);
		}
		
		console.log(selectedIds.length + " : " + i);
		
		if(i == selectedIds.length-1){
			console.log(listArr);
			call2FillPreview(listArr);
		}
	}
}

function call2FillPreview(listArr){	
	var dt_Table = $('#dtSummaryPopularCategory').DataTable( {
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
						"render": function ( data, type, cells ) {
							
							//console.log("DATAS :  " + data);
							console.log("ROWS :  " + cells);
							/* var rowStr = "" + row + "";
							var cells = Array();
							cells = rowStr.split(',');							
							console.log(cells); */
							
							if(cells[1]>0){
								return "<span class='icon-round pointer glyphicon glyphicon-pencil' onclick='javascript: _editItem(\"" + cells[1] + "\",\"" + cells[2] + "\",\"" + cells[3] + "\");'></span>";
							}else{
								return "<span class='icon-round pointer glyphicon glyphicon-plus' onclick='javascript: _editItem(\"" + cells[1] + "\",\"" + cells[2] + "\",\"" + cells[3] + "\");'></span>";
							}
						 },
							"targets": 0,
							"searchable": false,
							"ordering": false
					},{ width: '4%', targets: 0 },{ width: '25%', targets: 4 },{ width: '35%', targets: 5 }],
		 tableTools: {
            "sRowSelect": "single"
        },
		"data": listArr,
		 "columns": [
			{"class": "","orderable": false, "data": null,"defaultContent": ""},
			{ title: "ID" },
			{ title: "CATEGORYID" },
			{ title: "SUB-CATEGORY" },
			{ title: "Category" }
		]
	});
	$("div.toolbar2").html("Summary");
	
}