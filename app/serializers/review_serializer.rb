class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :score, :user_id, :plant_id

  belongs_to :user 
end
