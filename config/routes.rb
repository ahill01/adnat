Rails.application.routes.draw do
  resources :shifts
  resources :users, only:[:create, :update, :show, :index, :destroy]
  resources :organizations, only:[:create, :update, :show, :index, :destroy]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
