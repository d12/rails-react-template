# Be sure to restart your server when you modify this file.

if Rails.env == 'development'
  Rack::MiniProfiler.config.position = 'bottom-right'
end
