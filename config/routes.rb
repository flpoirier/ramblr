Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :destroy] do
      member do
        post 'like', to: 'posts#like'
        delete 'like', to: 'posts#dislike'
      end
    end
  end

  root "static_pages#root"
end

# I deleted "show" from the session controller -- do we need it??
