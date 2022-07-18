class OrganizationUsersController < ApplicationController
    def create
        org_user = OrganizationUser.create!(org_user_params)
        render json: org_user, status: :created
    end

    def destroy
       org_user = OrganizationUser.find_by(user_id:params[:user_id],organization_id:params[:organization_id])
       org_user.destroy
       render json: org_user, status: :ok
    end

    private
    def org_user_params
        params.permit(:organization_id,:user_id)
    end
    
end
