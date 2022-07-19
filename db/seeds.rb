##
puts("Seeding Organizations")
Organization.create(name:"Pet's Spa",hourly_rate:16.00)
Organization.create(name:"Papa Joe's Pasta Shack",hourly_rate:7.50)

puts("Seeding Users")
User.create(name:"Allison Hill",email:"a@email.com",password:"123456")
User.create(name:"Beatrice Beaumont",email:"b@email.com",password:"123456")
User.create(name:"Claire Crawford",email:"c@email.com",password:"123456")

puts("Seeding Organization-Users joins")
OrganizationUser.create(user_id:1,organization_id:1)
OrganizationUser.create(user_id:1,organization_id:2)
OrganizationUser.create(user_id:2,organization_id:2)
OrganizationUser.create(user_id:3,organization_id:1)

puts("seeding shifts")
Shift.create(start:DateTime.new(2022,7,7,10),finish:DateTime.new(2022,7,7,15),user_id:1,organization_id:1,break_length:15)

Shift.create(start:DateTime.new(2022,7,8,10),finish:DateTime.new(2022,7,8,15),user_id:1,organization_id:1,break_length:15)

Shift.create(start:DateTime.new(2022,7,9,10),finish:DateTime.new(2022,7,9,15),user_id:1,organization_id:1,break_length:15)

Shift.create(start:DateTime.new(2022,7,10,10),finish:DateTime.new(2022,7,7,15),user_id:1,organization_id:1,break_length:15)

Shift.create(start:DateTime.new(2022,7,7,8),finish:DateTime.new(2022,7,7,10),user_id:2,organization_id:1,break_length:10)

Shift.create(start:DateTime.new(2022,7,8,8),finish:DateTime.new(2022,7,8,10),user_id:2,organization_id:1,break_length:10)

Shift.create(start:DateTime.new(2022,7,15,8),finish:DateTime.new(2022,7,7,16),user_id:3,organization_id:2,break_length:30)

Shift.create(start:DateTime.new(2022,7,17,8),finish:DateTime.new(2022,7,17,16),user_id:3,organization_id:2,break_length:30)
