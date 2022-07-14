Rails.application.routes.draw do
  resources :shifts
  resources :users, only:[:create, :update, :show, :index, :destroy]
  resources :organizations, only:[:create, :update, :show, :index, :destroy]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/sessions', to: "sessions#index"
  get '/organizations/shifts/:organization_id', to: "shifts#index"
end
