class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
include ActiveModel::Serialization
end
