function time(){	
	var date = new Date();
		var current_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " / " +  date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
		document.getElementById("date").innerHTML = current_date;
		setTimeout(time, 1000);
	}
	
	time();