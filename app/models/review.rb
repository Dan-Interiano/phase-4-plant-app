class Review < ApplicationRecord
    belongs_to :plant     
    belongs_to :user

    validates :title, :comment, :score, presence: true
    validates :comment, length: {maximum: 100}
    validates :title, length: {maximum: 15}
    validates :score, numericality: { only_integer: true }
    
end
