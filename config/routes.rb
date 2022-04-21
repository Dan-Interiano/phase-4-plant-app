Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/plants", to: "plants#index"
  get "/plants/:id", to: "plants#show"
  post "/plants", to: "plants#create"

  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  resources :users, only:[:show, :create]
  
  resources :reviews
  
end
