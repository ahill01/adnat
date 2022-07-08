class User < ApplicationRecord
  has_secure_password
  validates :email, presence:true
  
  belongs_to :organization
  has_many :shifts
end
