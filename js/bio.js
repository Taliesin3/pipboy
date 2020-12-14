// NB: insert <script src="js/bio.js"></script> at bottom of index.html to activate

$(document).ready(function(){
    // Type out bio 
  const bio = 'I\'m a self-taught web developer that for the past 10 years worked on, in and with China.|I\'m fluent in Mandarin Chinese, and until April 2020 I was a project manager working on criminal justice and legal development in China.|I decided to change careers when I finally realised I wanted to solve problems for a living.'
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