require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    erb :index
  end

  configure :production do
    require 'newrelic_rpm'
  end

  run! if app_file == $0
end