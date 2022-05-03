class Review < ApplicationRecord
    belongs_to :plant     
    belongs_to :user

    validates :title, :comment, :score, presence: true
    validates :comment, length: {maximum: 100}
    
end
