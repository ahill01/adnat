class SessionsController < ApplicationController
    def create 
        user = User.find_by(email: session_params[:email])
        if user && user.authenticate(session_params[:password])
            session[:user_id] = user.id
            render json: user, response: :ok
        else 
            render json: { 
                errors: ['no such user', 'verify credentials and try again or signup']
              }, status: :not_found
            end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private
    def session_params
        params.require(:credentials).permit(:email, :password)
    end
end
