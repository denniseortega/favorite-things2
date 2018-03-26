var userText = [];



$(document).ready(function() {
  $("button#addButton").click(function(){


    var text=$("#favoriteThingText").val();
    userText.push(text);
    var text2=$("#favoriteThingText2").val();
    userText.push(text2);
    $('ul').append('<li>' +userText+ '</li>');

  });

});
