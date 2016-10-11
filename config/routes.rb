Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :destroy]
  end

  root "static_pages#root"
end

# I deleted "show" from the session controller -- do we need it??
