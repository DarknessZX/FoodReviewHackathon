function login(){
	var formData = {
		username: $('#username').val(),
		password: $('#password').val()
	}; 
	console.log(formData);
	$.post("https://arcane-hollows-49001.herokuapp.com/api/user/login",
    formData,
    function(res){
        if(res.code) {

        }
        else {
        	alert(res.message);
        }
    });
}