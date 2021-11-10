    // CHECK PASS
            function checkPass()
                {
                var patientRegPassword = document.getElementById('patientRegPassword');
                var patientRegConPassword = document.getElementById('patientRegConPassword');
                var message = document.getElementById('message');
                var goodColor = "#66cc66";
                var badColor = "#ff6666";

                if(patientRegPassword.value.length > 5)
                {
                    patientRegPassword.style.borderColor = goodColor;
                    if(patientRegPassword.value == patientRegConPassword.value){
                        patientRegConPassword.style.borderColor = goodColor;
                        message.style.color = goodColor;
                        message.innerHTML = "Password Match"
                        setTimeout(function() {document.getElementById('message').innerHTML='';},5000);
                    }
                    else{
                        patientRegConPassword.style.borderColor = badColor;
                        message.style.color = badColor;
                        message.innerHTML = "Sorry, Your passwords don't match"
                        setTimeout(function() {document.getElementById('message').innerHTML='';},5000);
                    }
                }
                else
                {
                    patientRegPassword.style.borderColor = badColor;
                    message.style.color = badColor;
                    message.innerHTML = " you have to enter at least 6 digit!"
                    setTimeout(function() {document.getElementById('message').innerHTML='';},5000);
                    }
                }

                // CHECK EMAIL IF VALID EMAIL
                    function validateEmail() {
                    var patientEmail = document.myForm.patientEmail.value;
                    atpos = patientEmail.indexOf("@");
                    dotpos = patientEmail.lastIndexOf(".");
                    
                    if (atpos < 1 || ( dotpos - atpos < 2 )) {
                    alert("Please enter correct email ID")
                    document.myForm.patientEmail.focus() ;
                    return false;
                    }
                    return( true );
                }
            // END CHECKING FORM VALIDATION