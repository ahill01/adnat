class ShiftSerializer < ActiveModel::Serializer
    attributes :date, :start_time, :finish_time, :break_length, :hours_worked

    def start_time
       return self.object.start.strftime('%I:%M:%S :%p')
    end

    def finish_time
      return self.object.start.strftime('%I:%M:%S :%p')
    end

    def date
    return self.object.start.strftime('%D')
    end

    def hours_worked
        worked = (self.object.finish - self.object.start)/1.minutes
        return ((worked - self.object.break_length)/60).to_i
    end


    belongs_to :user
    belongs_to :organization
end