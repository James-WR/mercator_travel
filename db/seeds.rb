# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create!(email: "jr@jr.com", password: "123456", username: "James123")
puts "Created a user"
Trip.create!(name: "my holiday", user_id: user.id)
puts "Created a trip for this user"
