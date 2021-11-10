<?php
session_start();
if (isset($_POST['adminLogin'])){
    include "connection.php";
    $Username = $_POST['adminUsername'];
    $Password = $_POST['adminPassword'];
    $sql = "SELECT * FROM `admintbl` WHERE `adminUsername` = '$Username' AND adminpassword ='$Username'";
    $result = mysqli_query($con, $sql);
    if(mysqli_num_rows($result)>0){
           echo 1;
           $_SESSION['username'] = $Username;
    }else{
           echo 0;
    }
}
?>


