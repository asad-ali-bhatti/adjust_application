# Idea:

 A simple application that search and display Github repositories. 
 
### Tech Stack: 
 It uses Ruby on Rails for the backend and React for the front-end.
 
### Tests
 Tests are written in Rspec. you can run tests by following command.
 
 ``rspec .``

### Setup:
 - Clone application.
   
   ``git clone git@github.com:asad-ali-bhatti/adjust_application.git``  
 - Go to application folder and install required gems. 
   
   ``bundle install``
   
 - Install front end packages.
   
   ``yarn install`` 
 
 - Provide environment variables. 

   ``echo 'GITHUB_TOKEN=your-token' > .env``

 - Start Server
   
   ``rails s``    

### Things left to do
  - Test Github search service using VCR gem (it will send actual request and record for future)
  - Provide proper failure messages in response 
  - Provide Exception handling in Github search service.(handle cases like service unavailable)
