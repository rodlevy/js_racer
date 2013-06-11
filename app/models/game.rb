class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :heats
  has_many :players, :through => :heats
end
