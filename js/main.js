$(document).ready(function(){

	var org = {
		init: function() {
			this.getOrg();
		},

		getOrg: function() {
			$.ajax({
				type: 'GET',
				beforeSend: function (xhr) {
					xhr.withCredentials = true;
					xhr.setRequestHeader('Authorization', 'Basic ' + btoa('x:' + "xyjfvhjajkmcarswif5k0whm7hkhmfju"));
					},
				url: 'http://api.beta.sherpadesk.com/organizations/',
				async: true,
				cache: false,
				dataType: 'json',			
				success: function(returnData) {
					alert(JSON.stringify(returnData));
				},
				error: function() {
					alert("fail");
				}
			}).promise();
		}
	};

	(function() {
		org.init();
	}()); 
	

});
