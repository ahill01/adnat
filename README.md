# ADNAT README

This is my work sample for WeWork's Adnat Ruby on Rails challenge. 

# Setup Instructsions
Download the zip file or create a clone of the repository's main branch. 

## Starting the Server
pull up a terminal within the **/adnat-allison-main** folder and run the following commands:  

1. bundle install
2. rails db:migrate db:seed
3. rails s 

This will start the server on port 3000, with several demo accounts, organizations, and shift data loaded into the database. 

## Starting the Front End Client
Pull up another terminal within **/adnat-allison-main/client** folder and run the following commands: 

1. npm install && npm start

This will start the front-end client on port 4000 & make the app accessible on the web-browser at the domain http://localhost:4000/

## Demo Account Login Info
email: a@email.com password:123456
* belongs to Pet's Spa & Papa Joe's Pasta Shack
* has 4 shifts @ Pet's Spa, each with a 15 minute break

email: b@email.com password:123456
* belongs to Pet's Spa 
* has 2 shifts, each with a 10 minute break

email: c@email.com password:123456
* belongs to Papa Joe's Pasta Shack
* has 2 shifts, each with a 30 minute break

# Key Tasks

> User, Organizations, Shifts, Users models [DONE]

> Users should be prompted to login, sign up, or reset their password [DONE]

* session controller, log in function on front end that graps user entered credentials & directs post request to "/login" to create function in sessions controller

> Signup Page: includes Name, Email, Password, Password confirmation [DONE]
* checks passwords match, are proper length before sending to database 

> Prompt new users to join a new organization (or create one) [DONE]
* automatically redirects to join org page if not assigned to an org already

> Users should be able to edit all organizations [DONE]
* edit button toggles edit form visibility for each organization 

> once user has joined an organiztion should be overview of actions for organization [DONE]
* when a user joins or joins/creates an organization, user is redirected to their home page

> delete user's shift if user leaves organizations [DONE]
* only deletes shifts if they have not occured yet, otherwise they are archived

> shift page shows all shifts that belong to user & fellow employees  [DONE]
* (shows shift date, shift length, hours worked minus break length, shift cost)

STRETCH:

> users can edit their account details [NOT STARTED]

> modify/delete shifts [NOT STARTED]

> store shifts of departed (for prior employee lists) [DONE]

> filter shifts [NOT STARTED]

> overnight shift [NOT STARTED]

> double if shift is sunday [NOT STARTED]

>multiple breaks [NOT STARTED]

> multiple organizations [DONE]

> full nav bar [NOT STARTED]