class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :org

# TODO: figure out how to get it to play nice w/ null
#TODO: refactor to many-to-many relationship

    def org 
        org = Organization.find(self.object.organization_id)
        return org
    end
end