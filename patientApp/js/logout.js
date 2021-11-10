$(document).ready(function(){
    $("#patientLogout").on('click',function(){
        $.ajax({
            type: 'POST',
            url: '/saint_James/patientApp/php/patientLogout.php',
            success: function(response){
                console.log(response);
                if(response == 1){
                    window.location = "/saint_James/patientSchedLogin.html";
                }
                else{
                    Swal.fire({
                    icon: 'error',
                    title: 'Logout Failed',
                })     
                }
            }
        })
    });
});