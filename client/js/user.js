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
        }
        else {
        	alert(res.message);
        }
    });
}

function signup(){
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
}
