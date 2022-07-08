class ShiftsController < ApplicationController

    def index
        if params.include?(:user_id) then 

        end
        if params.include(:organization_id) then

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
