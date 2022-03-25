class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :destination_exact
      t.string :destination_country
      t.date :date_start
      t.date :date_end
      t.string :description
      t.string :trip_map
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
