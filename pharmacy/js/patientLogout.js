$(document).ready(function(){
    $("#patientLogout").on('click',function(){
        $.ajax({
            type: 'POST',
            url: '/saint_James/Pharmacy/php/logout.php',
            success: function(response){
                console.log(response);
                if(response == "Logout Successfully"){
                    window.location = "/saint_James/patientPharmLogin.html";
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