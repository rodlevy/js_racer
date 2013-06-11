

$(document).ready(function() {

  var save_to_db = function(data) {
    $.post('/save_game', data);
  };

  $('.winner').hide();
    var x = 0;

  $(document).on('keyup', function(event) {
    x ++;
    if (x === 1) {
      start = new Date();
    };

    if (event.which === 81) {
      var currentCol = $('#player1_strip .active');

      currentCol.removeClass('active');
      currentCol.next().addClass('active');
      if (currentCol.next().attr('id') === "finish_line1") {
        $(document).unbind('keyup');
        var end = new Date();
        var race_time = (end - start) / 1000
        $('.winner h2').text('Player one rocks!!! ' + race_time + ' seconds! You so speeeeeedy!' );
        $('.winner').show();
      }
    }
    else if (event.which === 80) {
      var currentCol = $('#player2_strip .active');

      currentCol.removeClass('active');
      currentCol.next().addClass('active');

      if (currentCol.next().attr('id') === "finish_line2") {
        $(document).unbind('keyup');
        var end = new Date();
        var race_time = (end - start) / 1000
        $('.winner h2').text('Player two rocks!!! ' + race_time + ' seconds! You so speeeeeedy!' );
        $('.winner').show();
        var data = { 'time': race_time, 'winner': player2_id };
        console.log(data);
        save_to_db(data);
      }
    }

  });
});



// q = 81
// p = 80


// {id: player.id}
