const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function validate(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username=="swarnetadmin"&&password=="uwiadmin")
	{
		window.location="messages.html";  
		return false;
	}
	else
	{
		alert("Login failed. Try again.");
	}
}