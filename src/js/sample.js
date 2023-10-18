var i = 1 ;

function addForm() {
  var input_data = document.createElement('input');
  input_data.type = 'text';
  input_data.id = 'inputform_' + i;
  input_data.placeholder = 'フォーム-' + i;
  var parent = document.getElementById('form_area');
  parent.appendChild(input_data);
  i++ ;
}

/*
var s = i;
function removeForm() {
  var output_data = document.getElementById('form');
  //alert(output_data);
  output_data.remove();
  //i--;
}

var id = 1;
var MIN_FORM = 1;
var MAX_FORM = 6;
var addForm = function() {
  var tbl = document.getElementById("form_table");
  if(MAX_FORM == tbl.rows.length) return;
  var newRow = tbl.insertRow(-1);
}

var removeForm = function(){

}
*/