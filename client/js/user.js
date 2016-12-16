function setUsername(username) {
	$('#user_login').html(username);
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

function login(userinfo){

	if (userinfo) {
		username = userinfo.username;
		password = userinfo.password;
	} else {
		username = $('#username').val();
		password = $('#password').val();
	}

	var formData = {
		username: username,
		password: password
	};

	//console.log(formData);
	$.post("/api/user/login",
    formData,
    function(res){
        if(res.code) {
					console.log(res);
					$('#myModal').hide();
					setUsername(res.username);
					$('#button_logout').show();
					$('#button_logout').css({"width":"100px","float":"right","margin-top":"-33px"})
        }
        else {
        	alert(res.message);
        }
    });
}

function logout() {
	document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	$('#user_login').hide();
	$('#button_logout').hide();
	$(".header_personal").css({ "visibility": "visible" });
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
						userinfo = {
							username: username,
							password: password
						}
						console.log(userinfo);
						login(userinfo);
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

function checkToken() {
		$.get("/api/user/me",
		function(res) {
			if (res.code) {
				console.log("token valid");
				setUsername(res.user.username);
				$('#button_logout').show();
				$('#button_logout').css({"width":"100px","float":"right","margin-top":"-33px"})
			} else {
				console.log("token invalid");
				$('.header_personal').show();
				$('#button_logout').hide();
			}
		}
	)
}
