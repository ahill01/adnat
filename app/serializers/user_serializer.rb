class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :no_orgs
    
    def no_orgs
       return self.object.organization_users.length === 0 
    end
end