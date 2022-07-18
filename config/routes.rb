Rails.application.routes.draw do
  resources :organization_users, only:[:create, :update, :show, :index, :destroy]
  resources :shifts
  resources :users, only:[:create, :update, :show, :index, :destroy]
  resources :organizations, only:[:create, :update, :show, :index, :destroy]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/sessions', to: "sessions#index"
  get '/organizations/shifts/:organization_id', to: "shifts#index"
  delete '/organization_users/user/:user_id/:organization_id', to: "organization_users#destroy"
  get '/users/:user_id/organizations', to: "users#organizations_index"
end
