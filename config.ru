require './app'
run Sinatra::Application
heroku config:add RACK_ENV=production