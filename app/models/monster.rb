class Monster < ApplicationRecord
  validates :name, :description, presence: true
end
