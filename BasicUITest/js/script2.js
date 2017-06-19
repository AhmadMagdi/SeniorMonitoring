

function validateForm(argument) {

}

function litres(ev) {
	document.getElementById('litres').value=" "+document.getElementById('quantity').value+" Litres";
}
//$(document).ready( function() {    $('#date').val(new Date().toDateInputValue());});
var now =new Date();
document.getElementById('date').setAttribute("min",now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate())  ;
document.getElementById('quantity').addEventListener("change",litres);
