class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews

    validates :username, :password_digest, uniqueness: true
    validates :username, :password_digest, presence: true 
    validates :password, length:{minimum: 8}
end
