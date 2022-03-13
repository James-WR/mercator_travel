# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create!(email: "jr@jr.com", password: "123456", username: "James123")
puts "Created a user"
Trip.create!(name: "my holiday", user_id: user.id, description: "This trip was really cool. I'm so glad I got to go on this trip. So many #memries.
  I really found myself. Lived, laughed and loved. I feel so privileged lol. It's so humbling.", destination_exact: "Genoa")
puts "Created a trip for this user"
Trip.create!(name: "my long weekend", user_id: user.id, description: "Went out and got totally sloshed with the lads. It was Deano's stag and we got totally battered lol.
  The locals all loved us. They kept muttering lots of stuff and looking at us - definitely 'I wish we could be
  having as much fun as them'.", destination_exact: "Riga")
puts "Created a trip for this user"
