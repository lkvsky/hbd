require 'sinatra'
require 'rubygems'
require 'rpm-contrib'

get '/' do
  erb :index
end

configure :production do
  require 'newrelic_rpm'
end