class User < ApplicationRecord
  has_secure_password
  validates :email, presence:true
  
  has_many :organizations, through: :organization_users
  has_many :organization_users, dependent: :destroy
  has_many :shifts
end
