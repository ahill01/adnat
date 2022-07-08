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

    private
    def user_params
        params.permit(:email,:name,:password)
    end
end
