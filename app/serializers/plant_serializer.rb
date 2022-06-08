class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :sun_exposure, :soil_type, :water_cycle, :bio, :image_url

  has_many :reviews
  has_many :users, through: :adopteds 

  
end
