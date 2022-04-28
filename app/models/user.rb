class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews
    has_many :adopteds
    has_many :plants, through: :adopteds
    
    validates :username, :password_digest, uniqueness: true
    validates :username, :password_digest, presence: true 
    validates :password, length:{minimum: 8}
end
