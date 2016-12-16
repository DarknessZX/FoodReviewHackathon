function login(){
	var formData = {
		username: $('#username').val(),
		password: $('#password').val()
	};
	//console.log(formData);
	$.post("https://arcane-hollows-49001.herokuapp.com/api/user/login",
    formData,
    function(res){
        if(res.code) {
					console.log(res);
					$('#myModal').hide();
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
	} $('#signup_status').html('Username and password is required');
}
