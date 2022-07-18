class OrganizationUsersController < ApplicationController
    def create
        org_user = OrganizationUser.create!(org_user_params)
        render json: org_user, status: :created
    end

    def destroy
       org_user = OrganizationUser.find_by(user_id:params[:user_id],organization_id:params[:organization_id])
       shifts = Shift.where("user_id = ? AND organization_id = ?",params[:user_id],params[:organization_id])
       shifts.each do |shift|
        byebug;
        if(shift.start > Time.now())
            shift.destroy
        end
       end
       org_user.destroy
       render json: org_user, status: :ok
    end

    private
    def org_user_params
        params.require(:organization_user).permit(:organization_id,:user_id)
    end
    
end
