class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :org

    def org 
        org = Organization.find(self.object.organization_id)
        return org
    end
end