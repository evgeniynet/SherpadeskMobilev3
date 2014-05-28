$(document).ready(function(){
	
	var userOrgKey = "";
	var userOrg = "";
	var userInstanceKey = "";
	var	userKey = "xyjfvhjajkmcarswif5k0whm7hkhmfju";
	
	var org = {
		init: function() {
			this.getOrg();
		},

		getOrg: function() {
			$.ajax({
				type: 'GET',
				beforeSend: function (xhr) {
					xhr.withCredentials = true;
					xhr.setRequestHeader('Authorization', 'Basic ' + btoa('x:' + userKey));
					},
				url: 'http://api.beta.sherpadesk.com/organizations/',
				async: true,
				cache: false,
				dataType: 'json',			
				success: function(returnData) {
					userOrgKey = returnData[0].key;
					userOrg = returnData[0].name;
					userInstanceKey = returnData[0].instances[0].key;
					console.log("userInstanceKey "+userInstanceKey);
					console.log(returnData);
					$(".SherpaDesk").html(userOrg);
				},
				error: function() {
					alert("fail @ getOrg");
				}
			}).promise();
		}
	};

	var ticketCount = {
		init: function() {
			this.getTicketCount();
		},

		getTicketCount: function() {
			$.ajax({
				type: 'GET',
				beforeSend: function (xhr) {
					xhr.withCredentials = true;
					xhr.setRequestHeader('Authorization', 
                             'Basic ' + btoa(userOrgKey + '-' + userInstanceKey +':'+userKey));
					},

				url:"http://api.beta.sherpadesk.com/tickets/counts",
				dataType:"json",
				success: function() {
					alert("worked");
				},
				error: function() {
					alert("fail");
				}
			});
		}
	};


	(function() {
		org.init();
		ticketCount.init();
	}()); 
	

});
