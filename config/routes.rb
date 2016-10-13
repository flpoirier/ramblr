
Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create] do
      member do
        post 'follow', to: 'users#follow'
        delete 'follow', to: 'users#unfollow'
      end
    end
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
