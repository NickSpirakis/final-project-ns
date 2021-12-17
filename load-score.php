<?php
    header("Content-Type: application/json; charset=UTF-8");
    $myfiler = fopen("scores.json", "r") or die("Unable to open file to read!");
    $obj = fread($myfiler,filesize("scores.json"));
    fclose($myfiler);
    echo $obj;
?>