$(document).ready(function(){
	
	var userOrgKey = "";
	var userOrg = "";
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
        xhr.setRequestHeader('Authorization', 
                             'Basic ' + btoa(userKey));
        },
    url: 'http://api.beta.sherpadesk.com' + '/tickets/emmjf5',
    data: {}, 
    dataType: 'json',
    success: function (d) {
             alert('Success! Got ticket ' + d.subject);  
    },
    error: function (e, textStatus, errorThrown) {
             alert(errorThrown);
    }
 });
		}
	};


	(function() {
		org.init();
		ticketCount.init();
	}()); 
	

});
