$(document).ready(function() {
  $(document).ajaxStart(function() {
    var opts = {
      lines: 17, // The number of lines to draw
      length: 0, // The length of each line
      width: 4, // The line thickness
      radius: 15, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      color: '#000', // #rgb or #rrggbb
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether the use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: 25, // Top position relative to parent in px
      left: 25// Left position relative to parent in px
    };
    var target = document.getElementById('loading');
    var spinner = new Spinner(opts).spin(target);
    $(target).data('spinner', spinner);
  });
  $(document).ajaxStop(function() {
    $('#loading').data('spinner').stop();
  });
  $('button').click(function() {
    $.ajax('https://yoda.p.mashape.com/yoda', {
      headers: {
        'X-Mashape-Key': 'yXZNR6KauFmshjfIJLFPQLH5IYbup1xPkgEjsnT52m6WWQKY00'
      },
      data: {
        sentence: $('#input').val()
      },
      success: function(sentence) {
        $('#translation').text(sentence);
      }
    });
  });
});
