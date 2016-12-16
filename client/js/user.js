function login(){
	var formData = {
		username: $('#username').val(),
		password: $('#password').val()
	};
	//console.log(formData);
	$.post("/api/user/login",
    formData,
    function(res){
        if(res.code) {
					console.log(res);
					$('#myModal').hide();
					
					$('#user_login').html(res.username);
					$(".header_personal").css({ "visibility": "hidden" });
					$('#user_login').css({ 
					"background-color" : "#fff",
					"font-weight" : "bold", 
					"width" : "100px", 
					"text-align" : "center",
					"border-radius" : "5px",
					"padding" : "5px 0px",
					"margin-top" : "-33px",
					"text-overflow" : "hidden"})		
        }
        else {
        	alert(res.message);
        }
    });
}

function signup(){
	username = $('#username_signup').val();
	password = $('#password_signup').val();
	if (username != '' && password != '') {
		var formData = {
			username: $('#username_signup').val(),
			password: $('#password_signup').val(),
			name : $('#name').val(),
			age : $('#age').val()
		};
		console.log(formData);
		$.post("/api/user/create",
			formData,
			function(res) {
					if (res.status) {
						$('#myModal').hide();
					} else {
						console.log(res);
						$('#signup_status').html(res.message);
					}
			}
		);
	} else {
		$('#signup_status').html('Username and password is required');
	}
}
