<?php
        $host = "localhost";
        $username = "root";
        $password = "";
        $database = "saintjames";


        $con = new mysqli ("$host" , "$username" , "$password", "$database");


        if($con->connect_error){

            echo "failed";
            die();
        }
?>