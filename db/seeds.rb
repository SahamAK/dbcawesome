require 'faker'


users_desired = 50
users_available = User.all.count

(users_desired - users_available).times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  username = "#{first_name}.#{last_name}"
  email = Faker::Internet.safe_email(username)

  User.create(username: username, email: email, password: "password")
end



