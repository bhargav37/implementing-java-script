
/* MAKE SURE ALL FIELDS HAVE VALUES */
function validateFields(){
	var name = document.sendMail.name.value;
	var mail = document.sendMail.email.value;
	var website = document.sendMail.website.value;
	var message = document.sendMail.message.value;

	if(name == "" || mail == "" || website == "" || message == ""){
		alert("Please fill in all form fields!");
		return false;
	} else{
		alert("Form data submitted!");
	}
}


/* Validate name */
function validateName(){
	var name = document.sendMail.name.value;
	if(name == ""){
		document.getElementById("name_error").textContent="Please enter your name!";
		return false;
	} else if(name.length <= 2){
		document.getElementById("name_error").textContent="Invalid name! Should be more than 2 characters!";
		return false;
	} else{
		document.getElementById("name_error").textContent="";
	}
}

/* Validate email */
function validateMail(){
	var mail = document.sendMail.email.value;

	atpos = mail.indexOf("@");
	dotpos = mail.lastIndexOf(".");

	if(mail == ""){
		document.getElementById("mail_error").innerHTML="Please enter your mail!";
		return false;
	} else if (atpos < 1 || ( dotpos - atpos < 2 )){
	    document.getElementById("mail_error").innerHTML="Invalid email!";
	    return false;
	} else{
		document.getElementById("mail_error").innerHTML="";
	}
}

/* Validate URL */
function validateURL(){
	var website = document.sendMail.website.value;
	var ReGex= /(ftp|http|https):\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/

	if(website == ""){
		document.getElementById("url_error").innerHTML="Enter website!";
	    return false;
	} else if(ReGex.test(website)){
		document.getElementById("url_error").innerHTML="";
	} else{
		document.getElementById("url_error").innerHTML="Invalid url! example 'http://www.google.com'";
	    return false;
	}
}

/* validate message */
function validateMessage(){
	var message = document.sendMail.message.value;
	if(message == ""){
		document.getElementById("message_error").innerHTML="Please enter a message!";
		return false;
	} else if(message.length <= 5){
		document.getElementById("message_error").innerHTML="Message should be more than 5 characters!";
		return false;
	} else{
		document.getElementById("message_error").innerHTML="";
	}
}