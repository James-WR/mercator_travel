class Trip < ApplicationRecord
  belongs_to :user
  geocoded_by :destination_exact
  after_validation :geocode, if: :will_save_change_to_destination_exact?
end
