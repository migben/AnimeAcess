# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Anime.destroy_all

10.times do 
    User.create(name: Faker::Name.name)
end


10.times do
    Anime.create(title: Faker::Games::Pokemon.location, user_id: User.all.sample.id)
end
