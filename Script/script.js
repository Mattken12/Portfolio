$(document).ready(function() {

changeLanguage("FR");

function changeLanguage(language){


  if (language == "FR"){
    $(".lang-fr").show();
    $(".lang-en").hide();
    $("#lang-button").text("EN");
  }
  else if (language == "EN"){
    $(".lang-en").show();
    $(".lang-fr").hide();
    $("#lang-button").text("FR")
  }
  
  

}

// Event click sur bouton de la langue
$("#lang-button").click(function(){changeLanguage($("#lang-button").text())});


});