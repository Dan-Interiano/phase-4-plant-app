class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews
    has_many :adopteds
    has_many :plants, through: :adopteds
    
    validates :username, uniqueness: true
    validates :username, presence: true 
    validates :username, length:{minimum: 8}
end
