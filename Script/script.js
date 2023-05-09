$(document).ready(function() {

changeLanguage("lang-fr");

function changeLanguage(language){

  if (language == "lang-fr"){
    // document.getElementsByClassName("lang-en").style.display = "none";
    $(".lang-en").hide();
    $("#lang_button").text("lang-en");
  }
  else if (language == "lang-en"){
    // document.getElementsByClassName("lang-fr").style.display = "none";
    $(".lang-fr").hide();
    $("#lang_button").text("lang-fr")
  }
  
  $("." + language).show();

}

// Call changeLanguage
$("#lang_button").click(function(){changeLanguage($("#lang_button").text())});


});