require './app'
require 'newrelic_rpm'

NewRelic::Agent.after_fork(:force_reconnect => true)
NewRelic::Agent.manual_start :app_name => 'hbd-party'

run App