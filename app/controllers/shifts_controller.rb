class ShiftsController < ApplicationController

    def index
        # if params.include?(:user_id) then 
        # end
        if params.include?(:organization_id) then
            shifts = Shift.where(organization_id: params[:organization_id])
            shifts.sort
            render json: shifts, status: :ok
        end

    end 

    def create
        shift = Shift.create!(shift_params)
        render json: shift, status: :ok
    end

    def update
        
    end

    def destroy
        if params.include?(:organization_id) then
            shifts = Shift.where(organization_id: params[:organization_id])
            shifts.each do |shift|
                shift.destroy
            end
            render json:"shifts deleted", status: :ok
        end
        if params.include?(:user_id) then
            shifts = Shift.where(user_id: params[:user_id])
            shifts.each do |shift|
                shift.destroy
            end
            render json:"shifts deleted", status: :ok
        end  
    end

    private
    def shift_params
        params.require(:shift).permit(:user_id,:organization_id,:start,:finish,:break_length)
    end

end
