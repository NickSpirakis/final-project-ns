<?php
    $scores = $_POST["scores"];
    $myfile = fopen("scores.json", "w") or die("Unable to open file to write!");
    fwrite($myfile, $scores);
    fclose($myfile);
    echo "Scores saved";
?>