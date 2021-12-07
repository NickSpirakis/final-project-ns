/*
Requirement 1
Create a product based on your Final Project Proposal by:

Successfully deploying your application to an appropriate production environment

Making the source code available for review

Creating a simple yet visually pleasing user interface

Including and help system and user instructions that succinctly 
describes the application and how it works


Requirement 2
Implement at least four (4) meaningful features that are of similar 
complexity to features we delivered in previous applications.

*/

/*Requirement 1: Help System*/
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
   }
  
   function closeModal() {
     var modal = document.getElementById('myModal');
     modal.style.display = "none";
   }
  //learned from w3schools tutorial
   window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  

/*feature 1: Add your own word ------------------------------------------------------*/
var splitString = [];
var myword;

function getWordInput(){
    myword = document.getElementById("getWordInput").value;
    console.log("Word is " + myword);

}

MatchingLetter = [];

function setWordInput(){
    getWordInput()

    if(splitString.length == 0){
        for (var i = 0; i<myword.length; i++){
            splitString.push(myword.charAt(i));
        }
    }
    //console.log(splitString);

    MatchingLetter = splitString;
    console.log(MatchingLetter);

    document.getElementById("getWordInput").value = "";
}

function resetWordInput(){
    splitString = [];
    MatchingLetter = splitString;
    console.log(MatchingLetter);
}
//------------------------------------------------------------------------------------------

/*Feature 2: autofill the guessed letters*/ /*feature 3: score counter and win notification*/
function callLetter(){
    getLetter();
  }

//MatchingLetter = [];
NotMatching = [];
score = 0;

function getLetter(){
    //MatchingLetter = ["D", "O", "G", "S"];
    //NotMatching = [];
    var pInput = document.getElementById("playerInput").value
    console.log("player typed:" + pInput);
    
    
    checkNotMatch();
    console.log("Checking Not Match Function");

    //console.log("function getLetter(pInput) { ... }");

        if (((pInput != "") || (pInput != " ")) && (pInput == MatchingLetter[0]) && (document.getElementById("letterOne").value == "") || (document.getElementById("letterOne").value == " "))
            document.getElementById("letterOne").value = pInput;
            //score += 1;
            document.getElementById("playerInput").value = ""
        
        if (((pInput != "") || (pInput != " ")) && (pInput == MatchingLetter[1]) && (document.getElementById("letterTwo").value == "") || (document.getElementById("letterTwo").value == " "))
            document.getElementById("letterTwo").value = pInput;
            //score += 1;
            document.getElementById("playerInput").value = ""

        if (((pInput != "") || (pInput != " ")) && (pInput == MatchingLetter[2]) && (document.getElementById("letterThree").value == "") || (document.getElementById("letterThree").value == " "))
            document.getElementById("letterThree").value = pInput;
            //score += 1;
            document.getElementById("playerInput").value = ""

        if (((pInput != "") || (pInput != " ")) && (pInput == MatchingLetter[3]) && (document.getElementById("letterFour").value == "") || (document.getElementById("letterFour").value == " "))
            document.getElementById("letterFour").value = pInput;
            //score += 1;
            document.getElementById("playerInput").value = ""
        
        //document.getElementById("score").value = score;

      }
 
/*Wrong guesses go to new field */

found = true;
//wrong guesses show up here
function checkNotMatch(){
    var pInput = document.getElementById("playerInput").value
    console.log("pINPUT " + pInput)
    if ((pInput == "")||(pInput == " ")||(pInput==null)){
        var falseThing = false;
    }else{
        for (i =0; i < MatchingLetter.length; i++){
            if (pInput != MatchingLetter[i]){
                //NotMatching.push(pInput); 
                //console.log("not matching" + NotMatching.value);
                found = false;
            } else{
                found = true;
                break;
            }
        }
        if (found == false){
            NotMatching.push(pInput); 
            document.getElementById("wrongGuess").value = NotMatching;
            console.log("not matching" + NotMatching.value);
        }
        found = true;
        
        //console.log("not matching" + NotMatching.value);

        //document.getElementById("wrongGuess").value = NotMatching;

    }
}



/*feature 3: Score and win message*/


/*feature 4: Hints*/

function hint(){
    vowelCounter = 0;
    for (i =0; i < MatchingLetter.length; i++){
        if ((MatchingLetter[i] == "A")||(MatchingLetter[i] == "E")||(MatchingLetter[i] == "I")||(MatchingLetter[i] == "O")||(MatchingLetter[i] == "U")|| 
            (MatchingLetter[i] == "a")||(MatchingLetter[i] == "e")||(MatchingLetter[i] == "i")||(MatchingLetter[i] == "o")||(MatchingLetter[i] == "u"))
            {
            vowelCounter +=1; 
            }
    }
    document.getElementById("hint").value = "There are " + vowelCounter + " vowels!"
}
