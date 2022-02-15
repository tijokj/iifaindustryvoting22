<?php

require 'config.php';
$array = array('Errors' => 'Invalid Entry found!!');
$errors = false;

if ($_POST) {
    $name = (isset($_POST['txtName'])) ? $_POST['txtName'] : '';
    $surname = (isset($_POST['txtSurName'])) ? $_POST['txtSurName'] : '';
    $accessid = (isset($_POST['txtPassword'])) ? $_POST['txtPassword'] : '';

    $IDCardName = (isset($_POST['txtFileName'])) ? $_POST['txtFileName'] : '0.png';

    if ($name == '') {
        $array['Errors'] = 'Name cannot be empty!';
        $errors = true;
    }

    if ($accessid == '') {
        $array['Errors'] = 'access id cannot be empty!';
        $errors = true;
    }

    if ($errors == true) {
        echo json_encode($array);
        die();
    }

    $regDateTime = time();

    $Error = false;
    require_once 'dbConn.php';

    if ($Error == true) {
        $array['Errors'] = 'Could not connect database';
    } else {
        $SQLQuery = "SELECT v_ID,v_AccessCode,v_Name FROM iifavoters WHERE v_AccessCode='$accessid' AND v_IsActivated = 1";
        $result = $mysqli->query($SQLQuery);
        $num_rows = $result->num_rows;
        $row = $result->fetch_assoc();
        error_log($row['v_ID']);
        if ($num_rows > 0) {
            $_SESSION['WI16_ID'] = $row['v_ID'];
            $_SESSION['WI16_ACC_CODE'] = $row['v_AccessCode'];
            $_SESSION['WI16_SUR_NAME'] = $surname;
            $_SESSION['WI16_NAME'] = $name;
            $array['Errors'] = ''; // . $num_rows . $row[0] . $_SESSION['WI16_ID'];

            $SQLQuery = "UPDATE iifavoters SET v_Name='$name',v_SurName='$surname',v_IDCardName = '$IDCardName', v_LoginTime = $regDateTime WHERE v_AccessCode='$accessid'";
            $mysqli->query($SQLQuery);
        } else {
            $array['Errors'] = 'Invalid Access Code!';
        }
    }
    $mysqli->close();
} else {
    $array['Errors'] = 'Please enter all the required field!';
}

session_write_close();
echo json_encode($array);
die();
