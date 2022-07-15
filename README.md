# README

This is my work sample for WeWork's Adnat Ruby on Rails challenge. 

Key Tasks

* User, Organizations, Shifts, Users models

* Users should be prompted to login, sign up, or reset their password [DONE]
**session controller, log in function on front end that graps user entered credentials & directs post request to "/login" to create function in sessions controller

* Signup Page: includes Name, Email, Password, Password confirmation [IN PROGRESS:Logs in new user]
** checks passwords match, are proper length before sending to database 

* Prompt new users to join a new organization (or create one) [DONE]

* Users should be able to edit all organizations [IN PROGRESS: confirm update/delete functionality]

* once user has joined an organiztion should be overview of actions for organization [IN PROGRESS: add functionality to leave/edit organization]

*delete user's shift if user leaves organizations [NOT STARTED]

*shift page shows all shifts that belong to user & fellow employees  (shows shift date, shift length, hours worked minus break length, shift cost) [IN PROGRESS: data is there but not rendering in table, RIP]

STRETCH:

*users can edit their account details
*modify/delete shifts 
*store shifts of departed (for prior employee lists) [TODO: add "completed" column to shifts]
*filter shifts 
*overnight shift 
*double if shift is sunday
*multiple breaks
*multiple organizations


* ...
