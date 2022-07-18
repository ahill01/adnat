class UsersController < ApplicationController
    def create
        new_user = User.create!(user_params)
        render json: new_user, status: :created
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :ok
    end

    def destroy
        deleted_usr = User.find(params[:id])
        deleted_usr.destroy
        render json: deleted_usr, status: 200
    end
    
    def organizations_index
        user_orgs = []
        OrganizationUser.where("user_id = ?", params[:user_id]).each do |o| 
             user_orgs <<  Organization.find(o.organization_id)
          end
         render json:user_orgs, status: :ok
    end

    private
    def user_params
        params.permit(:email,:name,:password,:organization_id)
    end
end
