$(document).ready(function() {
  $(document).ajaxStart(function() {
    $('#spinner').toggle();
  });
  $(document).ajaxStop(function() {
    $('#spinner').toggle();
  });
  $('.button').click(function() {
    $.ajax('https://yoda.p.mashape.com/yoda', {
      data: {
        sentence: $('#input-text').val()
      },
      headers: {
        'X-Mashape-Key': 'yXZNR6KauFmshjfIJLFPQLH5IYbup1xPkgEjsnT52m6WWQKY00'
      },
      success: function(sentence) {
        $('.translation').text(sentence);
      }
    });
  });
});
