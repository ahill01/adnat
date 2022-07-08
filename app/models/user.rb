class User < ApplicationRecord
  has_secure_password
  validates :email, presence:true
  
  has_one :organization
  has_many :shifts
end
