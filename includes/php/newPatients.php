<?php
            include('connection.php');
             // NAME FROM THE FORM 
            $patientImage= $_FILES['patientImage']['name'];
            $patientFname = $_POST['patientFname'];
            $patientUsername = $_POST['patientUsername'];
            $patientEmail = $_POST['patientEmail'];
            $patientPassword = $_POST['patientPassword'];
            $patientConPassword = $_POST['patientConPassword'];
    
            $sql="SELECT * FROM `patienttbl` WHERE `patientFname` = '$patientFname' || `patientUsername` = '$patientUsername' || `patientEmail` = '$patientEmail'";
            $result = $con->query($sql) or die($con->error);
            $patient = $result->fetch_assoc();
    
            if($patient > 0){
            // header("Location: /saint_James/patientRegister.php?Register=exist");
            echo "Sorry, The Account is already Exist";
            exit();                 
            }else{
            $target_dir = "/saint_James/Administrator/assets/patientPhoto/";
            $target_file = $target_dir . basename($_FILES["patientImage"]["name"]);
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
            $check = getimagesize($_FILES["patientImage"]["tmp_name"]);
    
                // Checking the image
                if($check !== false) {
                    $uploadOk = 1;
                    } else {
                    // header("Location: /saint_James/patientRegister.php?Register=fileNotImage");
                    echo "Sorry, The File is not an image.";
                    $uploadOk = 0;
                    exit();                       
                    }
                    // Check file size
                    if ($_FILES["patientImage"]["size"] > 500000) {
                    // header("Location: /saint_James/patientRegister.php?Register=fileTooLarge");
                    echo "Sorry, The File is too large.";
                    $uploadOk = 0;
                    exit();                    
                    }
                    // Allow certain file formats
                    elseif($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                    && $imageFileType != "gif" ) {
                    // header("Location: /saint_James/patientRegister.php?Register=fileAllowed");
                    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                    exit();           
    
                    $uploadOk = 0;
                    }
                    // Check if $uploadOk is set to 0 by an error
                    elseif($uploadOk == 0) {
                    // header("Location: /saint_James/patientRegister.php?Register=fileNotUploaded");
                    echo "Sorry, your file was not uploaded.";
                    exit();           
                    } 
                    // if everything is ok, try to upload file
                    else{
                        if(!filter_var($patientEmail, FILTER_VALIDATE_EMAIL)){
                            echo "Sorry, Invalid Email Try Another one";
                            exit();  
                        }else{
                            $patientPassword = md5($patientPassword);
                            $sql = $con->query("INSERT INTO `patienttbl`(`patientImage`, `patientFname`, `patientUsername`, `patientEmail`, `patientPassword`) 
                            VALUES ('$patientImage','$patientFname','$patientUsername','$patientEmail','$patientPassword')");
                                    if($sql){
                                        move_uploaded_file($_FILES["patientImage"]["tmp_name"],$target_file);
                                        echo "Register Successfully";
                                    }else{
                                        echo "Sorry, Register Failed";
                                        exit();  
                                         }
                                    }
                              }
                        }
?>