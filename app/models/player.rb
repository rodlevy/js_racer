class Player < ActiveRecord::Base

  has_many :heats

  has_many :games, :through => :heats

  validates :initials, :uniqueness => true
end
