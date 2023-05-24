$(document).ready(function() {

  $(".lang-fr").hide(); 

function changeLanguage(language){


  if (language == "FR"){
    $(".lang-fr").show(400);
    $(".lang-en").hide(400);
    $("#lang-button").text("EN");
  }
  else if (language == "EN"){
    $(".lang-en").show(400);
    $(".lang-fr").hide(400);
    $("#lang-button").text("FR")
  }
  
  

}

// Event click sur bouton de la langue
$("#lang-button").click(function(){changeLanguage($("#lang-button").text())});


});