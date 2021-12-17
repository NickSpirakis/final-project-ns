

<?php
   
   $cityState = array(
        "60101" => "Addison, IL",
        "60102" => "Algonquin, IL",
        "60103" => "Bartlett, IL",
        "60104" => "Bellwood, IL",
        "60105" => "Bensenville, IL",
        "60106" => "Bensenville, IL",
        "60107" => "Streamwood, IL",
        "60108" => "Bloomingdale, IL",
        "60109" => "Burlington, IL",
        "60110" => "Carpentersville, IL",
        "60111" => "Clare, IL",
        "60112" => "Cortland, IL",
        "60113" => "Creston, IL",
        "60115" => "Dekalb, IL",
        "60116" => "Carol Stream, IL",
        "60117" => "Bloomingdale, IL",
        "60118" => "Dundee, IL",
        "60119" => "Elburn, IL",
        "60120" => "Elgin, IL",
        "60121" => "Elgin, IL",
        "60122" => "Elgin, IL",
        "60123" => "Elgin, IL",
        "60125" => "Carol Stream, IL",
        "60126" => "Elmhurst, IL",
        "60128" => "Carol Stream, IL"
    );

    $zip = $_GET["zip"];
    if (array_key_exists($zip, $cityState))
        print $cityState[$zip];
    else
        print " , ";

    //$tauntMessage = array(
        //"0" => "New Around Here, aren't ya",
        //"1" => "Wow, your first point, totally rad",
        //"2" => "At least it is more than 1 point",
        //"3" => "Three strikes youre out!",
        //"4" => "Is that all you got?",
        //"5" => "You can do better than this!",
        //"6" => "Keep On Going Flyer!",
        //"7" => "Lucky number 7!",
        //"8" => "You are improving!",
        //"9" => "Now things are looking up!",
        //"10" => "Woah, Double Digits Alert!",
        //"11" => "Now you are just showing off",
        //"12" => "Now you are just showing off",
        //"13" => "Now you are just showing off",
        //"14" => "Now you are just showing off",
        //"15" => "Now you are just showing off",
        //"-1" => "Hey! Wrong way pal!",
        //"-2" => "How low can you go?",
        //"-3" => "Better luck next guess",
        //"-4" => "Give Up?"
        //"-5" => "Have you considered pursuing a degree in Total Failure?"
        //"-6" => "Have you considered pursuing a degree in Total Failure?"
        //"-7" => "Have you considered pursuing a degree in Total Failure?"
        
    //);
    
    //$score = $_GET["score"];
    //if (array_key_exists($score, $tauntMessage))
        //print $tauntMessage[$score];
    //else
        //print " , ";
?>