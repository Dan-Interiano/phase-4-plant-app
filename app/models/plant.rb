class Plant < ApplicationRecord
    has_many :reviews
    has_many :adopteds
    has_many :users, through: :adopteds
    
    validates :name, :species, :sun_exposure, :soil_type, :water_cycle, :bio, :image_url, presence: true
    validates :name, :species, :sun_exposure, :soil_type, :water_cycle, length: {minimum:3, maximum: 25}
    validates :bio, length:{maximum: 200}
end
