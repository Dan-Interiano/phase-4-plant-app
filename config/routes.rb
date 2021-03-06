Rails.application.routes.draw do
  namespace :api do
    post "/login", to: "sessions#create"
    get "/auth", to: "users#show"
    delete "/logout", to: "sessions#destroy"
  
    resources :plants, only:[:show, :index, :create]
    resources :users, only:[:show, :create]
    resources :reviews
    resources :adopteds, only:[:index, :create]
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # get "/plants", to: "plants#index"
  # get "/plants/:id", to: "plants#show"
  # post "/plants", to: "plants#create"

  # post "/login", to: "sessions#create"
  # get "/auth", to: "users#show"
  # delete "/logout", to: "sessions#destroy"
  
  # resources :plants, only:[:show, :index, :create]
  # resources :users, only:[:show, :create]
  # resources :reviews
  # resources :adopteds, only:[:index, :create]
  
end
