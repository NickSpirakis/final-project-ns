<?php

    $tauntMessage = array(
        "0" => "New Around Here, aren't ya",
        "1" => "Wow, your first point, totally rad",
        "2" => "At least it is more than 1 point",
        "3" => "Three strikes youre out!",
        "4" => "Is that all you got?",
        "5" => "You can do better than this!",
        "6" => "Keep On Going Flyer!",
        "7" => "Lucky number 7!",
        "8" => "You are improving!",
        "9" => "Now things are looking up!",
        "10" => "Woah, Double Digits Alert!",
        "11" => "Now you are just showing off",
        "12" => "Now you are just showing off",
        "13" => "Now you are just showing off",
        "14" => "Now you are just showing off",
        "15" => "Now you are just showing off",
        "-1" => "Hey! Wrong way pal!",
        "-2" => "How low can you go?",
        "-3" => "Better luck next guess",
        "-4" => "Give Up?",
        "-5" => "Have you considered pursuing a degree in Total Failure?"
    );
    
    $score = $_GET["score"];
    if (array_key_exists($score, $tauntMessage))
        print $tauntMessage[$score];
    else
        print " , ";
?>