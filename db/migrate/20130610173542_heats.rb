class Heats < ActiveRecord::Migration
  def change
    create_table :heats do |h|
      h.integer :game_id
      h.integer :player_id
    end
  end
end
