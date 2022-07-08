class ApplicationController < ActionController::Base
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

private
    def render_unprocessable_response(exception)
        return render json: {errors: exception.record.errors.full_messages}, status:422
    end

    def render_not_found_response(exception)
        return render json: {errors:"record not found"}, status: 404
    end
end
