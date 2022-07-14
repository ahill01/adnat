class AddOrganizationToShift < ActiveRecord::Migration[7.0]
  def change
    add_reference :shifts, :organization, foreign_key: true
  end
end
