<?php
if (isset($_POST['patientLogin'])){
    include "connection.php";
    $Username = $_POST['usernamePatient'];
    $Password = $_POST['passwordPatient'];
    $hash = md5($Password);
    $sql = "SELECT * FROM `patienttbl` WHERE `patientUsername` = '$Username' AND patientPassword ='$hash'";
    $result = mysqli_query($con, $sql);
    if(mysqli_num_rows($result)>0){
           echo 1;
    }else{
        echo 0;
    }
}
?>


