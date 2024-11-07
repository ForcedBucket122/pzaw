<?php
    require 'polaczenie.php';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Access POST variables directly with a fallback to avoid undefined index warnings
        $rybyId = isset($_POST['rybyId']) ? $_POST['rybyId'] : '';
        $akwen = isset($_POST['akwen']) ? $_POST['akwen'] : '';
        $woj = isset($_POST['wojewodztwo']) ? $_POST['wojewodztwo'] : '';
        $rodzaj = isset($_POST['rodzaj']) ? $_POST['rodzaj'] : '';
    
        // Prepare the SQL statement
        $sql = "INSERT INTO lowisko (Ryby_id, akwen, wojewodztwo, rodzaj) VALUES ('$rybyId', '$akwen', '$woj', '$rodzaj')";
    
        if (mysqli_query($con, $sql)) {
            echo "Rekord został dodany pomyślnie.";
        } else {
            echo "Błąd: " . mysqli_error($con);
        }
    
        mysqli_close($con); // Close the database connection
        header("location: panel.php");
    }


