//Log-In Validation
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

// Sign-Up validation
function signUpValid() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var npassword = document.getElementById('npassword').value;
    var cpassword = document.getElementById('cpassword').value;

    if ((fname == ' ' || fname == null) && (lname == ' ' || lname == null) && (user == ' ' || username == null) && (email == ' ' || email == null) && (npassword == ' ' || npassword == null) && (cpassword == ' ' || cpassword == null)) {
        alert('All Fields Are Required');
        return false;
    }
    if (fname == ' ' || fname == null) {
        alert('First Name Field is required');
        return false;
    }
    if (lname == ' ' || lname == null) {
        alert('Last Name Field is required');
        return false;
    }
    if (username == ' ' || username == null) {
        alert('Username Field is required');
        return false;
    }
    if (email == ' ' || email == null) {
        alert('Last Name Field is required');
        return false;
    }
    if (npassword == ' ' || npassword == null) {
        alert('Password Field is required');
        return false;
    }
    if (cpassword == ' ' || cpassword == null) {
        alert('Confirm Password Field is required');
        return false;
    }
    if (npassword != cpassword) {
        alert('Password Does Not Match');
        return false;
    }
}

// Menu Bar
const menuItems = document.getElementById('menu-items');

function menu() {
    if (menuItems.style.display == 'none') {
        menuItems.style.display = 'block';
    } else {
        menuItems.style.display = 'none';
    }
}

function hide() {
    if (menuItems.style.display == 'block') {
        menuItems.style.display = 'none';
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
