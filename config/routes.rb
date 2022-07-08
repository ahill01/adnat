Rails.application.routes.draw do
  resources :shifts
  resources :users
  resources :organizations

  post '/login', to: "sessions_controller#create"
  delete '/logout', to: "sessions_controller#destroy"
end
