

function signup(){
	var email = document.getElementById("email").value;
	var username = document.getElementById("usrname").value;
	var password = document.getElementById("psw").value;
	data = {"email":email , "username":username , "password":password}
    $.ajax({
    url: "signupUserService",
    headers:{ 
        "Content-Type":"application/json"
    },
	type: 'POST',
    data: JSON.stringify(data),
    success: function (data) {
		
		//check if the response is success then 

		window.location = "../html/user_loginpage.html";	
	},
	error: function(data) {
		console.log("failure");
    }

	});
	//return false;
}