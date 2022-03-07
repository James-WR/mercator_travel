class AddColumnsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :username, :string
    add_column :users, :home_town, :string
    add_column :users, :travel_map, :string
    add_column :users, :countries_total, :integer
    add_column :users, :trips_total, :integer
    add_column :users, :continents_total, :integer
    add_column :users, :furthest_travelled, :integer
    add_column :users, :longest_trip, :integer
  end
end
