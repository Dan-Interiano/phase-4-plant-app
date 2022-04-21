class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :score
end
