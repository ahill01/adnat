class ShiftSerializer < ActiveModel::Serializer
    attributes :employee_name, :date, :start_time, :finish_time, :break_length, :hours_worked, :shift_cost

    def employee_name
        return User.find(self.object.user_id).name
    end
    def start_time
       return self.object.start.strftime('%I:%M:%S :%p')
    end

    def finish_time
      return self.object.finish.strftime('%I:%M:%S :%p')
    end

    def date
    return self.object.start.strftime('%D')
    end

    def hours_worked
        worked = (self.object.finish - self.object.start)/1.minutes
        @total_hrs_worked = ((worked - self.object.break_length)/60).to_i
        return @total_hrs_worked
    end

    def shift_cost
        self.object.organization.hourly_rate*@total_hrs_worked
    end


    belongs_to :user
    belongs_to :organization
end