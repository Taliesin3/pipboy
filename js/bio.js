$(document).ready(function(){
  // Type out bio 
  const bio = 'I\'m a self-taught web developer, and am fluent in Mandarin Chinese.|I used to be a project manager working on criminal justice and legal development in China.|I decided to change careers when I finally realised I wanted to solve problems for a living.'
  const timePerLetter = 50;
  const newLineCharacter = '|';

  function printOut(text) {
      for(var i = 0; i < text.length; i++) {
          var CHAR = text[i];
          setTimeout(appendLetter, timePerLetter*i, CHAR);
      }
  }

  function appendLetter(character)
  {
      if(newLineCharacter == character)
      {
          $('#bio').append('<br>');
      }
      else
      {
          $('#bio').append(character);
      }    
  }

  printOut(bio);
});