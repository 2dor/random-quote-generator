var listOfBackgroundColours = ["#F44336", "#2196F3", "#CDDC39", "#FF5722", "#673AB7", "#E91E63", "#795548", "#FFC107"];
var listOfLightPrimaryColours = ["#FFCDD2", "#BBDEFB", "#F0F4C3", "#FFCCBC", "#D1C4E9", "#F8BBD0", "#D7CCC8", "#FFECB3"];
var listOfButtonColours = ["#4CAF50", "#FF9800", "#E040FB", "#009688", "#FFC107", "#607D8B", "#536DFE", "#00BCD4"];
var colourIndex = 1;
var buttonColour = "";

var emplaceQuote = function(data) {
  $("#quoteText").html("<i class='fa fa-quote-left'></i> "+data["quoteText"]+" <i class='fa fa-quote-right'></i>");
  if (data.quoteAuthor === "")
    data.quoteAuthor = "Anonymous";
  $("#quoteAuthor").html("Author: "+data["quoteAuthor"]);
}

var changeQuote = function() {
  buttonColour = listOfButtonColours[colourIndex] + " !important";
  $("body").css("background-color", listOfBackgroundColours[colourIndex]);
  $(".btn").css('cssText', "background-color: " + buttonColour);
  $("#quoteAuthor").css('color', listOfLightPrimaryColours[colourIndex]);
  colourIndex = (colourIndex + 1) % listOfBackgroundColours.length;
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", emplaceQuote);
}

$(document).ready(function () {
  changeQuote();
  $(".btn-default").on("click", changeQuote);
});
