//Sign-Up Validation
function signValid(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let username =document.getElementById('username').value;
    let email = document.getElementById('eamil').value;
    let npassword = document.getElementById('npassword').value;
    let cpassword = document.getElementById('cpassword').value;

    if(fname=='' || fname == null && lname=='' || lname == null && username=='' || username == null && email=='' || email == null && npassword=='' || npassword == null && cpassword=='' || cpassword == null){
        alert('All fields are required');
        return false;
    }
    if(fname=='' || fname==null){
        alert('First Name field is required');
        return false;
    }
    if(lname=='' || lname==null){
        alert('Last Name field is required');
        return false;
    }
    if(username=='' || username==null){
        alert('Username field is required');
        return false;
    }
    if(email=='' || email==null){
        alert('Email field is required');
        return false;
    }
    if(npassword=='' || npassword==null){
        alert('Password field is required');
        return false;
    }
    if(cpassword=='' || cpassword==null){
        alert('Confirm Password field is required');
        return false;
    }
}

//Login Validation
function logvalid(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username== '' || username==null && password == '' || password==null){
        alert('Both field are required');
        return false;
    }
    if(username=='' || username==null){
        alert('Username field is required');
        return false;
    }
    if(password=="" || password==null){
        alert('Password field is required');
        return false;
    }
    if(username==password){
        alert('Both fields cannot be same');
        return false;
    }
}

//Contact Validation
function conValid(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email =document.getElementById('mail').value;
    var msg = document.getElementById('msg').value;

    if(firstName==''){
        alert('First name field is required');
        return false;
    }

    if(lastName==''){
        alert('Last name field is required');
        return false;
    }

    if(email==''){
        alert('Email field is required');
        return false;
    }

    if(msg==''){
        alert('Message field is required');
        return false;
    }
}

// function hidelogin() {
//     document.getElementById('glass-card').style.display = 'none';
// }

// function showlogin() {
//     document.getElementById('glass-card').style.display = 'block';
// }

// function myfunction() {
    //  alert('Button CLicked')
    // document.getElementById('lname').innerHTML = 'button is clicked.';
    //document.getElementById('fname').style.color = 'red';
    // document.getElementById('fname').style.display = 'none';
//     var myname = document.getElementById('fname');
//     if (myname.style.display == 'none') {
//       myname.style.display = 'block';
//     }

//     else {
//       myname.style.display = 'none';
//     }
// }

// document.addEventListener('mouseup', function (e) {
// var container = document.getElementById('inner-card')
//     if (!container.contains(e.target)) {
//       document.getElementById('glass-card').style.display = 'none';
//     }
// });