class Trip < ApplicationRecord
  validates :name, :destination_exact, presence: true
  validates :name, length: { in: 5..25 }
  validates :description, length: { maximum: 270 }
  has_many_attached :photos
  belongs_to :user
  geocoded_by :destination_exact
  after_validation :geocode, if: :will_save_change_to_destination_exact?
end
