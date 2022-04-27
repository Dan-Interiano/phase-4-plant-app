class Plant < ApplicationRecord
    has_many :reviews
    
    validates :name, :species, :sun_exposure, :soil_type, :water_cycle, :bio, :image_url, presence: true
    validates :bio, length:{maximum: 200}
end
