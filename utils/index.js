const idea = {
	formatDate: function(ts) {
		var now = new Date(ts);
		var year = now.getFullYear();
		var month = ((now.getMonth() + 1) < 10) ? ('0' + (now.getMonth() + 1)) : (now.getMonth() + 1);
		var date = (now.getDate() < 10) ? ('0' + now.getDate()) : (now.getDate());
		var hour = (now.getHours() < 10) ? ('0' + now.getHours()) : (now.getHours());
		var minute = (now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes());
		var second = (now.getSeconds() < 10) ? ('0' + now.getSeconds()) : (now.getSeconds());
		return year + "." + month + "." + date + " " + hour + ":" + minute + ":" + second;
	}
}

export default idea