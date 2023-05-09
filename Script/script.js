// function changeLanguage(language){
//   if (language == "lang-fr"){
//     // document.getElementsByClassName("lang-en").style.display = "none";
//     ​$('.lang-en').css('display'​​​​​​​​​​​​​​​​​​​​​​​​​​​,'none');​​​​​​
//   }
//   else if (language == "lang-en"){
//     // document.getElementsByClassName("lang-fr").style.display = "none";
//     ​$('.lang-fr').css('display'​​​​​​​​​​​​​​​​​​​​​​​​​​​,'none');​​​​​​
//   }
  
//   // document.getElementsByClassName(language).style.display = "block";
//   ​$("." + language).css('display'​​​​​​​​​​​​​​​​​​​​​​​​​​​,'block');​​​​​​
// }

// function test(){
//   alert("test");
// }

// jQuery(document).ready(changeLanguage('lang-fr'));

$(document).ready(function() {
  $("#lang").click(function() {
    console.log("Le bouton 'lang' a été cliqué !");
  });
});