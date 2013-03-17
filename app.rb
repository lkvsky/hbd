require 'sinatra'

get '/' do
  erb :index
end

configure :production do
  require 'newrelic_rpm'
end
