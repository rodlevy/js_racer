$(document).ready(function() {
  var p1 = $('#player1_strip').attr('class');
  var p2 = $('#player2_strip').attr('class');
  var player1 = new Player(p1);
  var player2 = new Player(p2);

  var game= new Game(player1, player2);
  console.log(game.start_time);
  $(document).on('keyup', function(){
    game.onKeyUp(event.which);
  });
});


function Game(player1, player2){

  this.start = function(){
    this.start_time = new Date();
    console.log(this.start_time);
  };

  var x = 0;

  this.onKeyUp= function(keypress){
    x ++;
    players = { 80 : { name: "player2", passIn: player2}, 81 : { name: "player1", passIn: player1 } }
    if (x === 1) {
      this.start();
    };
    this.render(players[keypress].name, players[keypress].passIn);
  };

  Game.prototype.render=function(player, initials){
    var currentCol= $('#'+player+'_strip .active');
    currentCol.removeClass('active');
    currentCol.next().addClass('active');
    this.checkStatus(currentCol.next());
    this.winCondition(currentCol.next(), initials);
  };

  Game.prototype.checkStatus=function(nextCol){
    if (nextCol.attr('id') === 'finish_line'){
      $(document).unbind('keyup');
      this.calcTime();
      console.log(this.race_time);
      return "done";
    };
  };

  Game.prototype.winCondition=function(nextCol, initials) {
    if (this.checkStatus(nextCol) === 'done'){
      this.winner = initials;
      console.log(this.winner);
      this.sendToDb(this.winner, this.race_time);
      this.updatePage();
    };
  };

  Game.prototype.calcTime=function() {
    var end_time = new Date();
    this.race_time = (end_time - this.start_time) / 1000;
  };

  Game.prototype.sendToDb=function(winner, time){
    var data = { 'time': time, 'winner': winner["initials"] };
    $.post('/save_game', data);
  };

  Game.prototype.updatePage=function(){
    $('.winner h2').text(this.winner["initials"] + ' rocks!!! ' + this.race_time + ' seconds! You so speeeeeedy!' );
    $('.winner').show();
  };
};


function Player(initials){
  this.initials = initials;
};
