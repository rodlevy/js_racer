get '/' do
  # Look in app/views/index.erb
  erb :intro
end

post '/create_players' do
  @player1 = Player.find_or_create_by_initials(params[:player1][:initials].upcase)
  @player2 = Player.find_or_create_by_initials(params[:player2][:initials].upcase)
  @game = Game.create
  @game.players << @player1
  @game.players << @player2
  erb :index
end


post '/rematch/:player1_id/:player2_id' do
  @player1 = Player.find(params[:player1_id].upcase)
  @player2 = Player.find(params[:player2_id].upcase)
  @game = Game.create
  @game.players << @player1
  @game.players << @player2
  erb :index
end

post '/save_game' do
  time = params['time']
  winner = params['winner']
  # Game.last.time = time.to_i
  Game.last.update_attribute(:time, time.to_f.round(3))
  Game.last.update_attribute(:winner_id, winner.to_i)
  # Game.last.winner_id = params['winner']
end

get '/game/:game_id' do
  @game = Game.find(params[:game_id])
  erb :view_game
end
