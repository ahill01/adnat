class ShiftsController < ApplicationController

    def index
        # if params.include?(:user_id) then 

        # end
        if params.include?(:organization_id) then
            shifts = Shift.where(organization_id: params[:organization_id])
            render json: shifts, status: :ok
        end

    end 

    def create

    end

    def update

    end

    def destroy
  
    end

    private
    def shift_params
        params.require(:shift).permit(:user_id,:start,:finish,:break_length)
    end

end
