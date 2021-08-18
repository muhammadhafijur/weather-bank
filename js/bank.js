document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if(userEmail == 'demo@gmail.com' && userPassword == 1234) {
        window.location.href = 'banking.html'
    }
    else {
        document.write('please use valid username and password');
    }
})