class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :score, :user_id, :plant_id, :author 

  belongs_to :user 

  def author 
    self.object.user.username
  end
end
