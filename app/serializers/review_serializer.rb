class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :score, :user_id, :plant_id, :review_user 

  belongs_to :user 

  def review_user 
    
    self.object.user.username
  end
end
