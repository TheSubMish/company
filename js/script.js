//Sign-Up Validation
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
var user = document.getElementById('username').value;
var email = document.getElementById('eamil').value;
var npassword = document.getElementById('npassword').value;
var cpassword = document.getElementById('cpassword').value;

function signValid() {

    if ((fname == '' || fname == null) && (lname == '' || lname == null) && (user == '' || user == null) && (email == '' || email == null) && (npassword == '' || npassword == null) && (cpassword == '' || cpassword == null)) {
        alert('All fields are required');
        return false;
    } else if (fname == '' || fname == null) {
        alert('First Name field is required');
        return false;
    } else if (lname == '' || lname == null) {
        alert('Last Name field is required');
        return false;
    } else if (user == '' || user == null) {
        alert('Username field is required');
        return false;
    } else if (email == '' || email == null) {
        alert('Email field is required');
        return false;
    } else if (npassword == '' || npassword == null) {
        alert('Password field is required');
        return false;
    } else if (cpassword == '' || cpassword == null) {
        alert('Confirm Password field is required');
        return false;
    } else if (npassword != cpassword) {
        alert('Password do not match');
        return false;
    } else {
        return true;
    }
}

//Login Validation
function logvalid() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username == '' || username == null) && (password == '' || password == null)) {
        alert('Both field are required');
        return false;
    }
    if (username == '' || username == null) {
        alert('Username field is required');
        return false;
    }
    if (password == "" || password == null) {
        alert('Password field is required');
        return false;
    }
    if (username == password) {
        alert('Both fields cannot be same');
        return false;
    }
}

//Contact Validation
function conValid() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('mail').value;
    var msg = document.getElementById('msg').value;

    if (firstName == '') {
        alert('First name field is required');
        return false;
    }

    if (lastName == '') {
        alert('Last name field is required');
        return false;
    }

    if (email == '') {
        alert('Email field is required');
        return false;
    }

    if (msg == '') {
        alert('Message field is required');
        return false;
    }
}
