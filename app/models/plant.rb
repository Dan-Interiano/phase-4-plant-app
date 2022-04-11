class Plant < ApplicationRecord
    validates :name, :species, :sun_exposure, :soil_type, :water_cycle, :bio, :image_rul, presence: true
    validates :bio, length:{maximum: 100}
    
end
