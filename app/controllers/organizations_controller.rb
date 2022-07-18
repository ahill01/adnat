class OrganizationsController < ApplicationController
    def index
        orgs_list = Organization.all
        render json: orgs_list, status: :ok
    end
    
    def create
        new_org = Organization.create!(org_params)
        render json: new_org, status: :created
    end

    def show
        org = Organization.find_by(params[:id])
        render json:org, status: :ok
    end

    def destroy
        org = Organization.find(params[:id])
        org.delete
        render json:org, status: :ok
    end

    def update
        org = Organization.find(params[:id])
        org.update(org_params)
        render json: org, status: :ok
    end

    private
    def org_params
        params.require(:organization).permit(:name, :hourly_rate)
    end
end
