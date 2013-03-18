require 'sinatra'

get '/' do
  erb :index
end

set :environment, :production

configure :production do
  require 'newrelic_rpm'
end