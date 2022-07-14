class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :organization_id
end