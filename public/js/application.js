

$(document).ready(function() {

  $('.winner').hide();


  $(document).on('keyup', function(event) {

    if (event.which === 81) {
      var currentCol = $('#player1_strip .active');

      currentCol.removeClass('active');
      currentCol.next().addClass('active');
      if (currentCol.next().attr('id') === "finish_line1") {
        $(document).unbind('keyup');
        $('.winner h2').text('Player one rocks!!!');
        $('.winner').show();
      }
    }
    else if (event.which === 80) {
      var currentCol = $('#player2_strip .active');

      currentCol.removeClass('active');
      currentCol.next().addClass('active');

      if (currentCol.next().attr('id') === "finish_line2") {
        $(document).unbind('keyup');
        $('.winner h2').text('Player two rocks!!!');
        $('.winner').show();
      }
    }
  });
});



// q = 81
// p = 80
