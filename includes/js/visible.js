//  PATIENT SCHEDULE LOGIN PASSWORD
// function scheduleLogin() {
//         var x = document.getElementById("patientSchedPassword");
//         var y = document.getElementById("eyeSchedLogin");
//         var z = document.getElementById("hideSchedLogin");
        
//         if (x.type==='password'){
//             x.type ="text";
//             y.style.display="block";
//             z.style.display="none";
//         }else{
//             x.type="password";
//             y.style.display="none"
//             z.style.display="block";
//         }
//         }
//  PATIENT PHARMACY LOGIN PASSWORD
    // function pharmacyLogin() {
    //     var a = document.getElementById("patientPassword");
    //     var b = document.getElementById("eyeLogin");
    //     var c = document.getElementById("hideLogin");

    //     if (a.type==='password'){
    //         a.type ="text";
    //         b.style.display="block";
    //         c.style.display="none";
    //     }else{
    //         a.type="password";
    //         b.style.display="none"
    //         c.style.display="block";
    //     }
    // }
//  END  OF PATIENT LOGIN PASSWORD

//  PATIENT PHARMACY REGISTER PASSWORD 1
// function patientRegister() {
//     var q = document.getElementById("patientRegPassword");
//     var r = document.getElementById("eyeRegister");
//     var t = document.getElementById("hideRegister");
    
//     if (q.type==='password'){
//         q.type ="text";
//         r.style.display="block";
//         t.style.display="none";
//     }else{
//         q.type="password";
//         r.style.display="none"
//         t.style.display="block";
//     }
// }
//  END OF PHARMACY REGISTER PASSWORD 1

//  PATIENT REGISTER PASSWORD 2
// function patientRegister2() {
//     var q = document.getElementById("patientRegConPassword");
//     var r = document.getElementById("eyeRegister2");
//     var t = document.getElementById("hideRegister2");
    
//     if (q.type==='password'){
//         q.type ="text";
//         r.style.display="block";
//         t.style.display="none";
//     }else{
//         q.type="password";
//         r.style.display="none"
//         t.style.display="block";
//     }
//     }
//  END  OF REGISTER PASSWORD 2

// Show password function
function showPassword() {
    var show = document.getElementById("adminPassword");
    if (show.type === "password") {
        show.type = "text";
    } else {
      show.type = "password";
    }
  } 
function showPassPharm() {
    var show = document.getElementById("patientPassword");
    if (show.type === "password") {
        show.type = "text";
    } else {
      show.type = "password";
    }
  } 
function showPassSched() {
    var show = document.getElementById("patientSchedPassword");
    if (show.type === "password") {
        show.type = "text";
    } else {
      show.type = "password";
    }
  } 
function showPassReg() {
    var show = document.getElementById("patientRegPassword");
    if (show.type === "password") {
        show.type = "text";
    } else {
      show.type = "password";
    }
  } 
function showPassConfirm() {
    var show = document.getElementById("patientRegConPassword");
    if (show.type === "password") {
        show.type = "text";
    } else {
      show.type = "password";
    }
  } 
