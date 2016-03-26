var rowCount = 0;
var rowCount1;
var total = 0;
var log = [];
var radio1 = false;
var radio2 = false;
var searchCommited = false;

function check(){
  var radio = document.getElementsByName('search_type');
  if (radio[0].checked) {
	if(radio2) {
		var item = document.getElementById('search_input');
		item.parentNode.removeChild(item);
		var item = document.getElementById('button');
		item.parentNode.removeChild(item);
	}
	if (searchCommited) {
			var item = document.getElementById('search_table');
			item.parentNode.removeChild(item);
			searchCommited = false;
	}
	var input = document.createElement('input');
	input.type = 'number';
	input.step = '0.01';
	input.placeholder = 'Enter sum absolute value';
	input.id = 'search_input';
	var element = document.getElementById('search_tools');
	element.appendChild(input);
	
	var button = document.createElement('a');
	button.id = 'button';
	button.className = 'btn';
	button.onclick = function(){
	  searchBySumAbs();
	};
    button.href = '#';
    var textNode = document.createTextNode('Search');
	button.appendChild(textNode);
	var element = document.getElementById('search_tools');
	element.appendChild(button);
	radio1 = true;
	radio2 = false;
  } else if (radio[1].checked) {
	if(radio1) {
		var item = document.getElementById('search_input');
		item.parentNode.removeChild(item);
		var item = document.getElementById('button');
		item.parentNode.removeChild(item);
	}
	if (searchCommited) {
			var item = document.getElementById('search_table');
			item.parentNode.removeChild(item);
			searchCommited = false;
	}
	var input = document.createElement('input');
	input.placeholder = 'Enter purpose/source';
	input.id = 'search_input';
	var element = document.getElementById('search_tools');
	element.appendChild(input);
	
	var button = document.createElement('a');
	button.id = 'button';
	button.className = 'btn';
	button.onclick = function(){
	  searchByDescription();
	};
    button.href = '#';
    var textNode = document.createTextNode('Search');
	button.appendChild(textNode);
	var element = document.getElementById('search_tools');
	element.appendChild(button);
	radio2 = true;
	radio1 = false;
  } else if ((radio[2].checked)&&((radio1)||(radio2))){
	var item = document.getElementById('search_input');
	item.parentNode.removeChild(item);
	var item = document.getElementById('button');
	item.parentNode.removeChild(item);
	if (searchCommited) {
			var item = document.getElementById('search_table');
			item.parentNode.removeChild(item);
			searchCommited = false;
	}
	radio1 = false;
	radio2 = false;
  }
}

function searchByDescription() {
	if (searchCommited) {
			var item = document.getElementById('search_table');
			item.parentNode.removeChild(item);
			searchCommited = false;
	}
	rowCount1 = 0;
	var description = document.getElementById('search_input').value;
	if(!validText(description)) {
		return;
	}
	var i;
	var buffer = [];
	var table = document.createElement('div');
	table.id = 'search_table';
	for(i = 0; i < rowCount; i++) {
		if(log[i].info.indexOf(description) + 1) {
			rowCount1++;
			buffer.push(log[i]);
			var row = document.createElement('div');
			var sumValue = log[i].sum;
			var infoText = log[i].info;
			if(sumValue > 0) {
				setColorClass(row, ' green', rowCount1);
			} else if(sumValue < 0){
				setColorClass(row, ' red', rowCount1);
			} else {
				setColorClass(row, '', rowCount1);
			}
			row.id = 's'+rowCount;
			var sub1 = document.createElement('div');
			sub1.className = 'col-sm-6 col-xs-6';
			sub1.id = 'sum';
			var sub2 = document.createElement('div');
			sub2.className = 'col-sm-6 col-xs-6';
			sub2.id = 'info';
			var text1 = document.createTextNode(sumValue);
			sub1.appendChild(text1);
			var text2 = document.createTextNode(infoText);
			sub2.appendChild(text2);
			row.appendChild(sub1);
			row.appendChild(sub2);
			table.appendChild(row);
		}
	}
	if(rowCount1 > 0) {
		var i;
		var currentTotal = 0;
		for(i = 0; i < rowCount1; i++) {
			currentTotal += parseFloat(buffer[i].sum);
		}
		var row = document.createElement('div');
		row.className = 'row total';
		row.id = 'total_search';
		var sub1 = document.createElement('div');
		sub1.className = 'col-sm-6 col-xs-6';
		sub1.id = 'sum';
		var sub2 = document.createElement('div');
		sub2.className = 'col-sm-6 col-xs-6';
		sub2.id = 'info';
		var text1 = document.createTextNode(currentTotal);
		sub1.appendChild(text1);
		var text2 = document.createTextNode('Total');
		sub2.appendChild(text2);
		row.appendChild(sub1);
		row.appendChild(sub2);
		table.appendChild(row);
		searchCommited = true;
		var element = document.getElementById('search');
		element.appendChild(table);
		
		searchCommited = true;
		var element = document.getElementById('search');
		element.appendChild(table);
	}
}

function searchBySumAbs() {
	if (searchCommited) {
			var item = document.getElementById('search_table');
			item.parentNode.removeChild(item);
			searchCommited = false;
	}
	rowCount1 = 0;
	var sumAbs = document.getElementById('search_input').value;
	if(!validSum(sumAbs)) {
		return;
	}
	value = parseFloat(sumAbs);
	if(value <= 0) {
		return;
	}
	var i;
	var buffer = [];
	var table = document.createElement('div');
	table.id = 'search_table';
	for(i = 0; i < rowCount; i++) {
		if(Math.abs(log[i].sum) - value > 0) {
			rowCount1++;
			buffer.push(log[i]);
			var row = document.createElement('div');
			var sumValue = log[i].sum;
			var infoText = log[i].info;
			if(sumValue > 0) {
				setColorClass(row, ' green', rowCount1);
			} else if(sumValue < 0){
				setColorClass(row, ' red', rowCount1);
			} else {
				setColorClass(row, '', rowCount1);
			}
			row.id = 's'+rowCount;
			var sub1 = document.createElement('div');
			sub1.className = 'col-sm-6 col-xs-6';
			sub1.id = 'sum';
			var sub2 = document.createElement('div');
			sub2.className = 'col-sm-6 col-xs-6';
			sub2.id = 'info';
			var text1 = document.createTextNode(sumValue);
			sub1.appendChild(text1);
			var text2 = document.createTextNode(infoText);
			sub2.appendChild(text2);
			row.appendChild(sub1);
			row.appendChild(sub2);
			table.appendChild(row);
		}
	}
	if(rowCount1 > 0) {	
		var i;
		var currentTotal = 0;
		for(i = 0; i < rowCount1; i++) {
			currentTotal += parseFloat(buffer[i].sum);
		}
		var row = document.createElement('div');
		row.className = 'row total';
		row.id = 'total_search';
		var sub1 = document.createElement('div');
		sub1.className = 'col-sm-6 col-xs-6';
		sub1.id = 'sum';
		var sub2 = document.createElement('div');
		sub2.className = 'col-sm-6 col-xs-6';
		sub2.id = 'info';
		var text1 = document.createTextNode(currentTotal);
		sub1.appendChild(text1);
		var text2 = document.createTextNode('Total');
		sub2.appendChild(text2);
		row.appendChild(sub1);
		row.appendChild(sub2);
		table.appendChild(row);
		
		searchCommited = true;
		var element = document.getElementById('search');
		element.appendChild(table);
	}
}

function setColorClass(row, strColor, rowC) {
		if(rowC == 1) {
			row.className = 'row first'+strColor;
		} else {
			row.className = 'row'+strColor;
		}	
}

function validText(infoText) {
	if(infoText!='') {
		return true;
	} else {
		return false;
	}
}

function validSum(sumValue) {
	if(sumValue=='') {
		return false;
	}
	if (isNaN(sumValue)) {
		return false;
	} else {
		return true;
	}
}

function addTotal(rowC, idRes) {
	if(rowC >= 1) {
		var i;
		var currentTotal = 0;
		for(i = 0; i < rowC; i++) {
			currentTotal += parseFloat(log[i].sum);
		}
		var row = document.createElement('div');
		row.className = 'row total';
		row.id = 'total';
		var sub1 = document.createElement('div');
		sub1.className = 'col-sm-4 col-xs-4';
		sub1.id = 'sum';
		var sub2 = document.createElement('div');
		sub2.className = 'col-sm-8 col-xs-8';
		sub2.id = 'info';
		var text1 = document.createTextNode(currentTotal);
		sub1.appendChild(text1);
		var text2 = document.createTextNode('Total');
		sub2.appendChild(text2);
		row.appendChild(sub1);
		row.appendChild(sub2);
		var element = document.getElementById(idRes);
		element.appendChild(row);
	}
}

function add(sumValue, infoText) {
	if (rowCount >= 1) {
		var item = document.getElementById('total');
		item.parentNode.removeChild(item);
	}
	rowCount++;
	log.push({ id: parseInt(rowCount), sum: sumValue, info: infoText});
	var row = document.createElement('div');
	if(sumValue > 0) {
		setColorClass(row, ' green', rowCount);
	} else if(sumValue < 0){
		setColorClass(row, ' red', rowCount);
	} else {
		setColorClass(row, '', rowCount);
	}
	row.id = 'r'+rowCount;
	var sub1 = document.createElement('div');
	sub1.className = 'col-sm-4 col-xs-4';
	sub1.id = 'sum';
	var sub2 = document.createElement('div');
	sub2.className = 'col-sm-6 col-xs-6';
	sub2.id = 'info';
	var text1 = document.createTextNode(sumValue);
	sub1.appendChild(text1);
	var text2 = document.createTextNode(infoText);
	sub2.appendChild(text2);
	

	var sub3 = document.createElement('div');
	sub3.className = 'col-sm-2 col-xs-2';
	sub3.id = 'del-button';
	var a = document.createElement('a');
	a.className = 'delete-button';
	a.id = rowCount;
	sub3.appendChild(a);

    a.onclick = function(){
	  deleteCertain(this.id);
	};

    a.href = '#';
    var textNode = document.createTextNode('delete');
	a.appendChild(textNode);
	row.appendChild(sub1);
	row.appendChild(sub2);
	row.appendChild(sub3);


	var element = document.getElementById('one');
	element.appendChild(row);
	addTotal(rowCount, 'one');
}

function addRow() {
	var sumValue = document.getElementById('sum_input').value;
	var infoText = document.getElementById('info_input').value;
	document.getElementById('sum_input').value='';
	document.getElementById('info_input').value='';
	if((!validText(infoText))||(!validSum(sumValue))) {
		return;
	}
	add(sumValue, infoText);
}

function deleteCertain(i) {
	var item = document.getElementById('total');
	item.parentNode.removeChild(item);
	var num = rowCount-1;
	while(rowCount > 0 ) {
		var item = document.getElementById('r'+rowCount);
		item.parentNode.removeChild(item);
		rowCount--;
	}
	var buffer = [];
	log.splice(i-1, 1);
	var j;
	for(j = 0; j < num; j++) {
		buffer.push(log[j]);
		add(log[j].sum, log[j].info);
	}
	log = buffer;
}

function deleteRow() {	
	var item = document.getElementById('r'+rowCount);
	item.parentNode.removeChild(item);
	log.pop();
	rowCount--;
}

function sumUp() {
		if(rowCount > 0) {
			var item = document.getElementById('total');
			item.parentNode.removeChild(item);
			while(rowCount!=0) {
			total += parseFloat(log[rowCount-1].sum);
			deleteRow();
		}
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1;
		var yyyy = today.getFullYear();
		if(dd<10){
			dd='0'+dd
		} 
		if(mm<10){
			mm='0'+mm
		} 
		var message = 'Sum up: ('+dd+'/'+mm+'/'+yyyy+')';
		var totalBuffer = total;
		total = 0;
		add(totalBuffer.toFixed(2), message);
	}
}